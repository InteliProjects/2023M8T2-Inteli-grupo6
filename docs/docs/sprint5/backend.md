---
sidebar_position: 1
slug: '/sprint5/Backend'
---



# Backend

Nesta seção, abordaremos a explicação do backend, desenvolvido utilizando [Node.js](https://nodejs.org/docs/latest/api/), um framework amplamente reconhecido para a construção de backends com JavaScript.

O principal objetivo do backend é atuar como um regulador, garantindo que todas as requisições feitas pelos usuários sejam devidamente processadas e encaminhadas para o destino adequado. Além de controlar a arquitetura de nós e os registros no banco de dados, o backend também gerencia o sistema de log, responsável por armazenar informações cruciais para a manutenção do sistema.

A meta principal é tornar o backend o mais escalável possível, desempenhando o papel de mediador. A arquitetura de nós é composta por um nó backend, nós LLM, STT, TTS, frontend e Nav2. A estrutura é projetada para garantir eficiência e coordenação entre esses elementos.

## Arquitetura de Backend

A arquitetura do backend segue o padrão do MVC, dividindo a estrutura em três camadas: models, views e controllers. Essa abordagem visa a clareza do sistema e, principalmente, o aumento da escalabilidade. Cada bloco da arquitetura é responsável por uma funcionalidade específica.

- **Models:** Esta pasta abriga a camada de modelos da aplicação, responsável pela manipulação dos dados. Aqui, são gerenciados e interagem com os registros do banco de dados, que está hospedado no Supabase.

- **Controllers:** Na pasta de controllers, encontramos a camada de controle da aplicação. Essa camada gerencia a comunicação entre as camadas, controlando as requisições do usuário e determinando quais terão impacto no banco de dados.

- **Routes:** Esta pasta concentra a camada de rotas da aplicação, responsável por gerenciar a interação do usuário com o backend. Serve como a porta de entrada para os registros do banco de dados, manipulando as chamadas dos controllers por meio das requisições do usuário, onde o usuário, nesse contexto, refere-se ao frontend, diretamente responsável pela interação com o usuário final.


<div style={{"margin": "0 auto", "max-width": "400px", "display": "flex", "justify-content": "space-around"}}>

<div style={{"padding-right": "30px"}}>

![Estrutura_Back](../../static/img/estrutura_back.png)

</div>
</div>



### Funções do Backend

1. **rclnodejs:** É uma biblioteca que permite a interação entre o ROS2 e o Node.js. Ela é usada para integrar o backend do sistema com a funcionalidade do robô, permitindo que comandos e dados sejam transmitidos entre eles.

2. **Integração com a API OpenAI:** Usamos a API da OpenAI (a mesma tecnologia por trás do ChatGPT) para dar ao chatbot a capacidade de entender e responder às solicitações dos operadores de forma inteligente.

3. **Movimentação do Robô Autônomo:** O ROS2, com a ajuda do rclnodejs, comunica com o robô, instruindo-o sobre como navegar pelo almoxarifado e guiar os operadores até as peças desejadas.




### Comunicação com o Supabase
É uma base de dados que armazena todas as informações necessárias para o funcionamento do nosso projeto. O Supabase é integrado ao nosso backend, permitindo que o sistema acesse e manipule os dados conforme necessário.

No projeto, ele fica responsável por:

1. **Armazenar posições**: o banco armazena a posição e quantidade das peças.

2. **Armazenar mensagens**: o banco armazena as mensagens trocadas entre o usuário e o chatbot.



### Logs do sistema
O sistema de log funciona como um diário digital que registra todas as ações e eventos que ocorrem dentro de um sistema. Se algo inesperado ocorre, como um erro ou um problema, você pode olhar para trás, no log, e ver exatamente o que aconteceu e quando. Ao analisa-los, tamém podemos identificar padrões, como quais peças são mais solicitadas ou em que momentos o almoxarifado tem mais movimento. Essas informações são valiosas para melhorar a eficiência e eficácia do robô, já que ele mostra exatamente o que foi feito, sem alterações ou esquecimentos, garantindo transparência nas operações.

No contexto do projeto para o almoxarifado, o sistema de log pode registrar informações como:

1. **Quando um pedido foi feito:** A hora e a data em que um técnico solicitou uma peça.

2. **Que peça foi solicitada:** Detalhes da peça que foi requisitada.



### Aplicação no Projeto:
O chatbot, alimentado pela API OpenAI, entende as solicitações dos operadores e comunica com o sistema do robô para guiá-los até a localização exata das peças no almoxarifado. Isso é feito de forma autônoma, otimizando o processo de busca e melhorando a eficiência geral.


## Execução do Backend

Para executar o backend do projeto, são necessárias algumas dependências. Siga os passos abaixo para garantir a correta execução da aplicação:

1. **Clone o repositório da aplicação do GitHub utilizando o seguinte comando:**
   ```
   git clone https://github.com/2023M8T2-Inteli/grupo6.git
   ```
   Execute este comando apenas se o projeto ainda não estiver clonado.

2. **Dirija-se ao diretório do repositório clonado, abra um terminal e execute o seguinte comando para instalar as dependências do Node.js:**
   ```
   npm i
   ```
   Este comando instala todas as dependências relacionadas ao Node.js e seus frameworks.

3. **Agora que todas as dependências estão instaladas, é necessário executar o backend. Navegue até o diretório 'interface' e execute o seguinte comando:**
   ```
   node backend/app.js
   ```

Após a execução deste comando, uma URL será exibida no terminal indicando que o backend está funcionando e pronto para cumprir seu papel.

Link do backend no github: https://github.com/2023M8T2-Inteli/grupo6/tree/dev/src/interface/backend
