---
sidebar_position: 3
slug: '/sprint3/logs'
---

# Sistema de Log

O SLM, ou Sistema de Log, é uma abordagem essencial no contexto do desenvolvimento de sistemas, notável por sua capacidade de registrar e monitorar atividades, fornecendo insights valiosos sobre o comportamento e desempenho do sistema. Essa prática é fundamental para identificar e solucionar problemas, além de rastrear eventos relevantes.

Os componentes principais deste sistema são os módulos logging.py, logRouter.js, logController.js, logging.js e logger.py, cada um desempenhando funções específicas para garantir um fluxo eficiente de informações.

### logging.py

**Descrição:** O módulo logging.py contém a implementação do nó do Logger, integrado ao ROS (Robot Operating System). Ele ouve mensagens no tópico "log_register" e registra essas mensagens no console, além de enviá-las para um serviço web.

**Classes e Funções:**

**LoggerNode:**

Método __init__:

- Inicializa o nó do Logger.
- Configura o ROS e a assinatura para o tópico "log_register".
- Configura o logging para exibir mensagens no console.
- Registra a mensagem de início no console.

Método listener_callback(msg):

- Callback chamado ao receber uma mensagem no tópico "log_register".
- Registra mensagens de log no console.
- Envia a mensagem para um serviço web usando a biblioteca requests.

Método main(args=None):

- Função principal para iniciar o nó do logger.
- Inicializa o nó, executa o loop de eventos do ROS e trata interrupções do teclado.

### logRouter.js

**Descrição:** O arquivo logRouter.js define um roteador Express para lidar com requisições HTTP relacionadas a logs.

**Rotas:**

POST /post:
- Rota para processar requisições POST de logs.
- Chama o controlador logController.postlog para processar a requisição.

### logController.js

**Descrição:** O arquivo logController.js contém funções de controle para manipular solicitações relacionadas a logs.

**Funções:**

postlog(req, res):
- Extrai a mensagem de log da requisição.
- Chama a função logging.postlog para registrar o log.
- Responde com o resultado ou envia um status de erro em caso de falha.

### logging.js

**Descrição:** O módulo logging.js fornece funções para manipular o registro de logs em um arquivo local.

**Funções:**

postlog(message):
- Gera uma entrada de log formatada com data e hora.
- Anexa a entrada ao arquivo log.txt no sistema de arquivos local.
- Registra mensagens de sucesso ou erros no console.

### logger.py

**Descrição:** O script logger.py fornece uma interface de linha de comando para registrar logs chamando um serviço web.

**Funções:**

logger(message):
- Envia uma mensagem para o serviço web utilizando a biblioteca requests.
- Retorna a resposta do serviço web.

main():
- Função principal para interagir com o usuário e chamar a função logger.