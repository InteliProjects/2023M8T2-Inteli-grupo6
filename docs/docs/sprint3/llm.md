---
sidebar_position: 2
slug: '/sprint3/llm'
---

# LLM

O LLM, ou Language Model, é uma abordagem avançada na área de processamento de linguagem natural (PLN) que se destaca por sua capacidade de compreender e gerar texto de maneira contextualmente relevante. Esses modelos, como o GPT-3 (Generative Pre-trained Transformer 3), são treinados em grandes conjuntos de dados textuais para aprender padrões complexos da linguagem. O LLM utiliza uma arquitetura de transformer, permitindo a captura de relações semânticas e contextuais em longas sequências de palavras. Essa capacidade de entender o contexto torna o LLM versátil em diversas aplicações, desde tradução automática até geração de texto criativo, destacando-se por sua habilidade em lidar com tarefas linguísticas complexas.

Dentro do escopo do projeto, a aplicação desta tecnologia será direcionada ao chatbot, permitindo que os usuários esclareçam dúvidas acerca das peças necessárias para solucionar um problema específico. Destaca-se, sobretudo, a habilidade do chatbot em fornecer informações precisas sobre as localizações no mapa onde essas peças solicitadas podem ser encontradas. Esse conhecimento é então encaminhado de maneira eficiente para o nó de navegação, otimizando a experiência do usuário no processo de resolução de questões técnicas.

Durante a Sprint 3, foram desenvolvidos três nós essenciais para a implementação do sistema: `input`, `llm`, e `output`. Suas responsabilidades são delineadas da seguinte forma:

- `input`: Recebe as requisições do usuário por meio de linhas de comando e as encaminha para processamento.
  
- `llm`: Processa o PDF de contexto, convertendo-o em vetores. Utilizando o modelo GPT da OpenAI, compreende o contexto fornecido pelo `input` e gera uma saída correspondente. Esta saída é então encaminhada para o próximo nó.
  
- `output`: Recebe a resposta gerada pelo `llm` e a exibe no terminal. Além disso, é responsável por enviar os pontos de navegação para seu nó correspondente.

O foco principal da implementação durante a Sprint 3 concentrou-se no desenvolvimento do `llm`. Decidiu-se que a interface permaneceria sendo realizada por linha de comando, com o desenvolvimento da interface planejado para a próxima sprint.

O PDF de contexto foi elaborado pelo grupo, contendo frases do tipo "O parafuso está localizado em (0.5, 0.5) e é utilizado para consertar portas". Essas frases informam ao nosso modelo o nome da peça, sua localização e uma possível questão que ela resolve.

Para transmitir pontos específicos ao nó de navegação, utilizaram-se expressões regulares (regex). Estas correspondiam ao formato de coordenadas na resposta gerada pelo `llm`, permitindo a extração e separação dos pontos em coordenadas x e y. Os pontos eram então agrupados em um array e enviados através de um tópico.

## Conexão com o robô

Para estabelecer a conexão com o robô e enviar comandos, é imperativo acessar o terminal do robô por meio de uma conexão SSH. Em seguida, execute o comando a seguir:
```
ros2 launch turtlebot3_bringup robot.launch.py
```

## Preparativos para a execução de um nó

Antes de executar nós ROS2, é essencial realizar os seguintes comandos na raiz do workspace onde os pacotes estão localizados:
```
colcon build
source install/local_setup.bash # ou altere para zsh, se necessário
```
A partir desse ponto, qualquer nó dentro desse workspace pode ser iniciado por meio de seu executável.

## Execução do LLM

Para que seja possível utilizar o LLM, rode os seguintes nós em terminais diferentes:

```
ros2 run chat input
ros2 run chat llm
ros2 run chat output
```

## Demonstração do LLM

<iframe width="560" height="315" src="https://www.youtube.com/embed/o90ccG_K9Hw?si=5dw7hXQWtaX-5rYK" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>