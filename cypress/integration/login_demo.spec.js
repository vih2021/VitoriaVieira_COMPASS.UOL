import LOGIN from './pages/login.spec'

describe("teste login", () =>{

    beforeEach(() => {
        LOGIN.acessarSite()
    })

    it('Não deve fazer o login ao clicar no botão com um login inválido', () => {
        LOGIN.logar()
    })

    it('Não deve fazer o login ao clicar no botão com um login inválido', () => {
        LOGIN.loginInvalido()
    })

    it('Não deve fazer o login ao clicar no botão com um login em branco', () => {
        LOGIN.loginEmBranco()
    })

    it('Deve verificar se os elementos da página estão visíveis', () => {
        LOGIN.elementsPage()
    })
})

