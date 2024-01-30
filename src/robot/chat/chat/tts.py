#! /bin/env python3
import rclpy
from rclpy.node import Node
from std_msgs.msg import String, Float32MultiArray
from gtts import gTTS
import os

class TTSNode(Node):

    def __init__(self):
        super().__init__('tts_node')

        self.subscription_ = self.create_subscription(
            msg_type=String,
            topic="/output",
            callback=self.listener_callback,
            qos_profile=10
        )

        self.get_logger().info("Ouvindo ao /output")

    def listener_callback(self, msg):
        self.get_logger().info(f"Vou falar: {msg.data}")
        self.audio = self.text_to_speech(msg.data)
        self.play_audio(self.audio)
    
    def text_to_speech(self, text, language='pt-br'):
        self.tts = gTTS(text, lang=language)
        self.audio_file = "speech.mp3"
        self.tts.save(self.audio_file)
        return self.audio_file
    
    def play_audio(self, audio_file):
        os.system(f"mpg321 {audio_file}")

def main(args=None):
    rclpy.init(args=args)
    tts_node = TTSNode()

    rclpy.spin(tts_node)

    tts_node.destroy_node()
    rclpy.shutdown()

if __name__ == "__main__":
    tts = gTTS(text="Hello World!", lang='PT-BR')
    audio_file = "speech.mp3"
    tts.save(audio_file)
    os.system(f"mpg321 {audio_file}")