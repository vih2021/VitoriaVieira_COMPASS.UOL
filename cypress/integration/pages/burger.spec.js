import Base from './_base.page'

const BurgerList            = `.bm-item-list`
const AllItems              = `#inventory_sidebar_link`
const About                 = `#about_sidebar_link`
const Logout                = `#logout_sidebar_link`
const Reset                 = `#reset_sidebar_link`
const BurgerBtn             = `#react-burger-menu-btn`
const CartBtn               = `.shopping_cart_link`
const ItemInCart            = `.cart_item`
const Exit                  = `#react-burger-cross-btn`

export default class BURGER extends Base {

    static burgerButton(){
        super.clickOnElement(BurgerBtn)
        super.verifyIfElementIsVisible(BurgerList)
        super.verifyIfElementIsVisible(AllItems)
        super.verifyIfElementIsVisible(About)
        super.verifyIfElementIsVisible(Logout)
        super.verifyIfElementIsVisible(Reset)
        super.verifyIfElementIsVisible(Exit)
    }

    static burgerAbout(){
        super.clickOnElement(BurgerBtn)
        super.clickOnElement(About)
        super.validarUrl('https://saucelabs.com/')
    }

    static burgerAllItems(){
        super.clickOnElement(BurgerBtn)
        super.clickOnElement(AllItems)
        super.validarUrl('/inventory-item.html')
    }

    static burgerLogout(){
        super.clickOnElement(BurgerBtn)
        super.clickOnElement(Logout)
        super.validarUrl('/')
    }

    static burgerReset(){
        super.clickOnElement(BurgerBtn)
        super.clickOnElement(Reset)
        super.clickOnElement(Exit)
        super.clickOnElement(CartBtn)
        super.verifyIfElementNotExists(ItemInCart)
    }
}
