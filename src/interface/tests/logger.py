import requests

base_url = 'http://localhost:4000'
components_url = base_url + '/log'

def logger(message):
    response = requests.post(components_url+"/post", json={'log':message})
    data = response.json
    return data

def main():
    message = input("Mensagem: ")
    res = logger(message)
    print(res)



if _name_ == "_main_":
    main() 