import requests

base_url = 'http://localhost:3000'
components_url = base_url + '/components'

def getComponents(component):
    response = requests.get(f'{components_url}/get/{component}')
    data = response.json()
    return data

def postComponents(component, description, quantity):
    response = requests.post(
        f'{components_url}/post',
        json={'component':component, 'description':description, 'quantity':quantity}
    )
    data = response.json()
    return data

def updateComponents(component, description, quantity):
    response = requests.post(
        f'{components_url}/update',
        json={'component':component, 'new_description':description, 'new_quantity':quantity}
    )
    data = response.json()
    return data

def main_post():
    component = input('Enter component: ')
    description = input('Enter description: ')
    quantity = input('Enter quantity: ')
    postComponents(component, description, quantity)
    print(getComponents(component))

def main_update():
    component = input('Enter component to update: ')
    description = input('Enter description to update: ')
    quantity = input('Enter quantity to update: ')
    updateComponents(component, description, quantity)
    print(getComponents(component))


if __name__ == '__main__':
    main_post()
    main_update()