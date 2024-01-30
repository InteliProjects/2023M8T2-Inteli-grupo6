---
sidebar_position: 3
slug: '/sprint4/interface/acessibilidade'
---

# Usabilidade e Acessibilidade

No âmbito da experiência digital, a interseção entre usabilidade e acessibilidade desempenha um papel central na construção de interfaces. A usabilidade, como a base da interação, busca a convergência entre simplicidade e eficiência, visando facilitar a jornada do usuário. Enquanto isso, a acessibilidade, como o alicerce da inclusão, assume a responsabilidade de garantir que cada elemento seja meticulosamente adaptado para ser compreendido e utilizado por todos os usuários, independentemente de suas capacidades ou dispositivos empregados. Esses alicerces não só formam a estrutura de uma interface, mas também estabelecem os fundamentos para uma conexão genuína entre usuário e tecnologia, promovendo a igualdade de acesso e celebrando a diversidade em sua totalidade.

## Design de Interface Gráfica (GUI): 
Para a interface mobile desenvolvida com React Native, o design é orientado para uma experiência mais simples e tranquila. O layout e as cores alinham-se à identidade visual do projeto Chauffeur, promovendo uma conexão consistente com a marca. A tipografia e os elementos interativos foram escolhidos visando à clareza e à facilidade de uso. Embora a usabilidade e acessibilidade ainda estejam em fase de desenvolvimento, estão nos planos integrar recursos para áudio, serviços de acessibilidade e descrições de imagens para garantir inclusão. O fluxo de usuário foi concebido para dispositivos móveis, visando a praticidade e simplificação no uso.

Já a interface Gradio foi adotada para melhorar a interação em comparação com a versão anterior baseada em linhas de comando. A implementação do chat, aliada aos processos de Speech-to-Text (STT) e Text-to-Speech (TTS), visa proporcionar uma experiência mais amigável. Os campos de entrada, incluindo texto e microfone, foram incorporados para facilitar a comunicação. A integração eficaz entre texto e áudio foi cuidadosamente planejada para garantir uma transição suave entre esses modos. A interface foi concebida para atender a diferentes tipos de entrada e dispositivos, considerando a variedade de usuários e suas necessidades.

Ambas as interfaces priorizam a usabilidade e a experiência do usuário. O design foi pensado para ser intuitivo, com layouts claros e elementos visuais bem definidos. Embora cada uma atenda a diferentes necessidades, ambas buscam proporcionar uma experiência de usuário positiva e adaptada para uma ampla gama de dispositivos e usuários.

## Usabilidade e Acessibilidade

As interfaces desenvolvidas para o projeto foram concebidas com um compromisso inegociável com a acessibilidade. Embora ainda em estágio de desenvolvimento e seja um MVP, a nossa equipe está ativamente engajada em garantir que todas as diretrizes de acessibilidade, incluindo as WCAG (Web Content Accessibility Guidelines), sejam estritamente seguidas e implementadas. Estamos comprometidos em oferecer recursos assistivos completos, tais como alternativas de entrada, descrições adequadas em imagens para usuários com dificuldades visuais, e a devida adaptação para diferentes habilidades e deficiências. O planejamento em andamento inclui a integração de recursos de acessibilidade, como alternativas de áudio, integração com serviços especializados e ajustes para garantir a utilização fácil e eficaz por uma ampla gama de usuários, independentemente das suas habilidades ou limitações.

## Eficiência da Conversão de Texto para Fala e Fala para Texto

**Sistema Text-to-Speech (TTS):**

O sistema TTS implementado oferece uma conversão precisa e eficaz do texto para fala, utilizando a tecnologia gTTs (Google Text-to-Speech). A voz gerada é clara e facilmente compreensível, proporcionando uma experiência de áudio de alta qualidade. Embora no momento não haja opções para ajustar a velocidade ou o tom da voz diretamente na interface, o sistema está projetado para futuras implementações desses ajustes, visando atender às preferências dos usuários. O TTS é desenvolvido com foco na acessibilidade e na facilidade de uso para todos os usuários, promovendo uma interação amigável e acessível em todo o sistema.

**Sistema Speech-to-Text (STT):**

O sistema STT, baseado na tecnologia Whisper da OpenAI, realiza a transcrição de áudio para texto de forma precisa e eficiente. No entanto, é importante notar que, devido às limitações do Whisper, a transcrição ocorre em inglês, influenciando as respostas geradas pelo LLM, que também são produzidas nesse idioma. Apesar dessas restrições linguísticas, o sistema STT atende ao requisito de processar comandos de fala ou texto em menos de 5 segundos, garantindo uma interação ágil e responsiva para os usuários.

Ambos os sistemas, TTS e STT, são elementos fundamentais para a experiência de usuário, proporcionando ferramentas eficazes para a interação por meio de áudio e texto, e estão em constante aprimoramento para atender às demandas e expectativas dos usuários.