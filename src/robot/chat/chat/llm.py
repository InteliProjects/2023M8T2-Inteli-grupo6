#! /bin/env python3
import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32MultiArray, String
import re
import soundfile as sf
import numpy as np
from openai import OpenAI
from .theme import theme

from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnablePassthrough
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings
from dotenv import load_dotenv
import gradio as gr


class LLMNode(Node):
    def __init__(self):
        super().__init__('llm_node')

        self.load()

        self.client = OpenAI()
        
        self.publisher_ = self.create_publisher(
            msg_type = String,
            topic = '/output',
            qos_profile=10)

        self.avatar_images = (
            "./chat/chat/data/user.png",
            "./chat/chat/data/robot.png"
        )

        self.run()

        self.get_logger().info("LLM Node created successfully")

    def load(self):
        load_dotenv()

        model = ChatOpenAI(model="gpt-3.5-turbo")

        loader = PyPDFLoader("./data/points.pdf")
        pages = loader.load_and_split()

        text_splitter = CharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=0
        )

        vectorstore = FAISS.from_documents(pages, OpenAIEmbeddings())

        retriever = vectorstore.as_retriever()

        prompt = ChatPromptTemplate.from_template(
        """Responda de acordo com o seguinte contexto:
        {context}

        Pergunta: {question}
        """)

        self.chain = (
            {"context": retriever, "question": RunnablePassthrough()}
            | prompt
            | model
        )
    
    def send_points(self, response):
        output = String()
        output.data = response

        self.publisher_.publish(output)

    def transcribe_audio(self, file_path):
        audio_file = open(file_path, "rb")
        self.client = OpenAI()
        transcript = self.client.audio.transcriptions.create(
            model="whisper-1", 
            file=audio_file,
            response_format="text",
            language="pt"
        )
        return transcript

    def respond(self, text, audio, chat_history=[]):
        response = ''
        if text:
            for s in self.chain.stream(text):
                response += s.content
            
            self.send_points(response)

            chat_history.append((text, response))

            return chat_history

        elif audio:
            transcribed = self.transcribe_audio(audio)

            for s in self.chain.stream(transcribed):
                response += s.content

            self.send_points(response)

            chat_history.append((transcribed, response))

            return chat_history
        
        else:
            response = 'Não entendi'

            chat_history.append(('', response))

            return chat_history

    def run(self):
        with gr.Blocks(theme=theme) as demo:
            chatbot = gr.Chatbot(avatar_images=self.avatar_images)
            with gr.Row():
                msg = gr.Textbox()
                mic = gr.Audio(type='filepath')
            btn = gr.Button(value='Submit', variant="primary")
            btn.click(self.respond, inputs=[msg, mic], outputs=[chatbot])

        demo.launch()

        self.get_logger().info("Gradio running successfully")

def main(args=None):
    rclpy.init(args=args)
    llm_node = LLMNode()

    rclpy.spin(llm_node)

    llm_node.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
