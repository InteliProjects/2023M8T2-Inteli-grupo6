---
sidebar_position: 3
slug: '/sprint4/tts'
---

# Sistema de Conversão de Texto para Voz

Visando ampliar a acessibilidade, tornou-se possível oferecer respostas audíveis, promovendo uma comunicação mais eficaz. Para alcançar esse objetivo, adotou-se uma abordagem que utiliza tecnologia de conversão de texto em fala. A ferramenta escolhida para essa finalidade é o gTTs (Google Text-to-Speech), que permite ao LLM ditar as respostas diretamente ao usuário.

Durante a etapa de implementação, foi desenvolvido um nó que, através do tópico ```\output```, recebe as respostas geradas pelo LLM em formato de texto. Em seguida, esse nó utiliza essas respostas para criar um arquivo de áudio, reproduzindo-o imediatamente em seguida.
```
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
```

É relevante notar que, devido às interferências do Whisper que traduzem os textos para inglês, quando a resposta é ditada, ela ocorre em inglês, embora com um sotaque brasileiro.

## Como executar

Para executar o nó responsável pelo TTS, execute na raíz do workspace:

```
colcon build
source install/local_setup.bash # substitua por zsh, se necessário
ros2 run chat tts
```

## Demonstração

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zhh_MciKsNw?si=i7pW4PHAVQ91t-ft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
