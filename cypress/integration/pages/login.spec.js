/// <reference types="cypress" />

import Base from './_base.page'
import Factory from '../../dynamics/factory'

const user         = `[data-test="username"]`
const password     = `[data-test="password"]`
const botao        = `[type="submit"]`
const messageError = `[data-test="error"]`

const logo           = `.login_logo`
const robotImg       = `.bot_column`
const credentials    = `#login_credentials`
const credentialPass = `.login_password`
const loginArea      = `.login_wrapper-inner`
const message        = `.error-message-container`

export default class LOGIN extends Base {

    static acessarSite(){
        cy.visit('/')
    }    

    static logar(){
        
        super.typeValue(user, 'standard_user')
        super.typeValue(password, 'secret_sauce')
        super.clickOnElement(botao)
        super.validarUrl('/inventory.html')
    }


    static loginInvalido(){
        let pass = Factory.gerarUsuario().password
        let username = Factory.gerarUsuario().username
        
        super.typeValue(user, username)
        super.typeValue(password, pass)
        super.clickOnElement(botao)
        super.validarUrl('/')
        super.validateElementText(messageError, 'Epic sadface: Username and password do not match any user in this service')
    }

    static loginEmBranco(){

        super.typeValueNull(user)
        super.typeValueNull(password)
        super.clickOnElement(botao)
        super.validarUrl('/')
        super.validateElementText(messageError, 'Epic sadface: Username is required')
    }

    static elementsPage(){

        super.verifyIfElementIsVisible(logo)
        super.verifyIfElementIsVisible(robotImg)
        super.verifyIfElementIsVisible(credentials)
        super.verifyIfElementIsVisible(credentialPass)
        super.verifyIfElementIsVisible(loginArea)
        super.verifyIfElementIsVisible(user)
        super.verifyIfElementIsVisible(password)
        super.verifyIfElementIsVisible(botao)
        super.verifyIfElementIsVisible(message)
    }
}
