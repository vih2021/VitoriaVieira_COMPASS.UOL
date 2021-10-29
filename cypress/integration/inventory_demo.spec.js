import LOGIN from './pages/login.spec'
import INVENTORY from './pages/inventory.spec'

describe("teste inventory", () =>{

    beforeEach(() => {
        LOGIN.acessarSite()
        LOGIN.logar()
    })

    it('Deve verificar se os elementos estão visíveis na página', () => {
        INVENTORY.elementsPage()
    })

    it('Deve verificar se o botão adicionar item ao carrinho funciona', () => {
        INVENTORY.AddItemCart()
    })
})
