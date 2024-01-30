
from llm import get_openai

def chatbot(message):
    explanation = get_openai(res=message)
    return explanation

def main():
    
    question = "y"
    
    while question.lower() == "y":
        pergunta = input("Faça uma pergunta: ")
        print(chatbot(pergunta))
        question = input("Deseja continuar?(y/n)")

if __name__ == "__main__":
    main()