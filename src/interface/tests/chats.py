import requests

base_url = 'http://localhost:3004'
chat_url = base_url + '/chat'

def getChats(chat):
    response = requests.get(f'{chat_url}/get/{chat}')
    response.raise_for_status()
    data = response.json()
    return data

def postChats(chat, message, user):
    response = requests.post(
        f'{chat_url}/post',
        json={'chat':chat, 'message':message, 'user':user}
    )
    response.raise_for_status()
    data = response.json()
    return data

def main_post():
    print(getChats(0))
    chat = input('Enter chat: ')
    message = input('Enter message: ')
    user = input('Enter user: ')
    postChats(chat, message, user)
    print(getChats(chat))

def main():
    main_post()

if __name__ == '__main__':
    main()