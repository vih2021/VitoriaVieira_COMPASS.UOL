import faker from 'faker'

export default class Factory {
    static gerarUsuario() {

        return {
            "nome": `${faker.name.findName()} ${faker.name.findName()}`,
            "username": `${faker.internet.userName()}`,
            "password": `${faker.internet.password()}`,
            "administrador": "true"
        }
    }
}