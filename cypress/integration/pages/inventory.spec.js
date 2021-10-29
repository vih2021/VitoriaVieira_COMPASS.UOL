/// <reference types="cypress" />

import Base from './_base.page'

const CartBtn               = `.shopping_cart_link`
const Filter                = `.product_sort_container`
const ListItem              = `.inventory_list`
const Logo                  = `.app_logo`
const SocialContact         = `.social`
const RobotImg              = `.footer_robot`
const AddCartBtn            = `.btn_primary`
const BackpackAddCart       = `#add-to-cart-sauce-labs-backpack`
const ItemInCart            = `.cart_item`
const RemoveBackpackBtnCart = `#remove-sauce-labs-backpack`
const CartBadge             = `.shopping_cart_badge`
const BurgerBtn             = `#react-burger-menu-btn`
const Footer                = `.footer_copy`

export default class INVENTORY extends Base {

    static elementsPage(){
        
        super.verifyIfElementIsVisible(BurgerBtn)
        super.verifyIfElementIsVisible(CartBtn)
        super.verifyIfElementIsVisible(Filter)
        super.verifyIfElementIsVisible(ListItem)
        super.verifyIfElementIsVisible(Logo)
        super.verifyIfElementIsVisible(RobotImg)
        super.verifyIfElementIsVisible(AddCartBtn)
        super.verifyIfElementIsVisible(SocialContact)
        super.verifyIfElementIsVisible(Footer)
    }

    static AddItemCart(){

        super.clickOnElement(BackpackAddCart)
        super.verifyIfElementIsVisible(CartBadge)
        super.clickOnElement(CartBtn)
        super.verifyIfElementIsVisible(ItemInCart)
        super.verifyIfElementIsVisible(RemoveBackpackBtnCart)
    }     
}