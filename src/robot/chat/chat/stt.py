#! /bin/env python3
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
import speech_recognition as sr

class SpeechToTextNode(Node):

    def __init__(self):
        super().__init__('speech_to_text_node')
        self.publisher_ = self.create_publisher(String, '/speech_text', 10)
        self.recognizer = sr.Recognizer()
        self.microphone = sr.Microphone()

        self.get_logger().info("Iniciando reconhecimento de fala...")
        self.listen_for_speech()

    def listen_for_speech(self):
        with self.microphone as source:
            self.recognizer.adjust_for_ambient_noise(source)  # Ajusta para o ruído do ambiente
            self.get_logger().info("Diga algo!")
            audio = self.recognizer.listen(source)

        try:
            text = self.recognizer.recognize_google(audio, language='en')  # Reconhece a fala usando a API do Google
            self.get_logger().info(f"Texto reconhecido: {text}")
            self.publish_text(text)
        except sr.UnknownValueError:
            self.get_logger().info("Não foi possível reconhecer a fala.")
        except sr.RequestError as e:
            self.get_logger().info(f"Erro durante a requisição ao serviço de reconhecimento: {e}")

    def publish_text(self, text):
        msg = String()
        msg.data = text
        self.publisher_.publish(msg)
        self.get_logger().info("Texto publicado!")

def main(args=None):
    rclpy.init(args=args)
    speech_to_text_node = SpeechToTextNode()
    rclpy.spin(speech_to_text_node)
    speech_to_text_node.destroy_node()
    rclpy.shutdown()

if __name__ == "__main__":
    main()
