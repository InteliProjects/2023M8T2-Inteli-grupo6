---
sidebar_position: 2
slug: '/sprint4/stt'
---

# Sistema de Conversão de Voz para Texto

A tecnologia empregada na transcrição de áudio, conhecida como Speech-to-text (STT), desempenha um papel essencial em nosso chat, permitindo aos usuários solicitar peças por meio de áudio. É crucial transcrever esse áudio para torná-lo compreensível para nosso LLM, possibilitando assim que o chat responda com informações sobre a peça desejada. Para alcançar esse objetivo, adotamos a ferramenta Whisper da OpenAI, um modelo avançado de reconhecimento de fala.

Na implementação atual, no nó responsável pela interface Gradio, foi incorporada a capacidade de acessar o conteúdo do componente de microfone. Essa adição possibilita o processamento do áudio gravado e o envio do resultado da transcrição para o componente de chat, exibindo a mensagem do usuário em formato de texto na interface. Além disso, o texto transcrito é enviado ao LLM para geração de resposta, facilitando a interação completa.

```
def transcribe_audio(self, file_path):
        audio_file = open(file_path, "rb")
        transcript = self.client.audio.translations.create(
            model="whisper-1", 
            file=audio_file,
            response_format="text"
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
```

É importante notar que, devido ao uso do Whisper, a transcrição do texto ocorre em inglês, influenciando, por consequência, as respostas do LLM, que também são geradas nesse idioma. Além disso, observamos restrições de uso do framework Gradio, especialmente em relação à gravação de voz, que apresentou desafios em alguns computadores, impactando o desempenho do Whisper.

Planejamos futuras implementações, incluindo a integração de um nó dedicado para STT, proporcionando aprimoramentos da modularização do sistema.

## Checklist de Requisitos

- O sistema deve processar comandos de fala ou texto em menos de 5 segundos 

Podemos inferir que o requisito foi atendido, dado que todas as solicitações ao sistema, tanto em formato de áudio quanto de texto, são processadas no tempo correto.

## Como executar

A funcionalidade do STT está incluída no nó de LLM, logo, para inicializá-lo, execute na raíz do workspace:

```
colcon build
source install/local_setup.bash # substitua por zsh, se necessário
ros2 run chat llm
```
    
## Demonstração

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zhh_MciKsNw?si=i7pW4PHAVQ91t-ft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>