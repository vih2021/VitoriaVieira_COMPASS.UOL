import BURGER from './pages/burger.spec'
import LOGIN from './pages/login.spec'

describe("teste inventory", () =>{

    beforeEach(() => {
        LOGIN.acessarSite()
        LOGIN.logar()
    })

    it('Deve verificar se os elementos do menu estão visíveis', () => {
        BURGER.burgerButton()
    })

    it('Deve verificar se a opção ABOUT dereciona para a URL correta', () => {
        BURGER.burgerAbout()
    })

    it('Deve verificar se a opção ALL ITEMS dereciona para a URL correta', () => {
        BURGER.burgerAllItems()
    })

    it('Deve verificar se a opção LOGOUT direciona para a URL correta', () => {
        BURGER.burgerLogout()
    })

    it('Deve verificar se a opção RESET remove os itens do carrinho', () => {
        BURGER.burgerReset()
    })
})