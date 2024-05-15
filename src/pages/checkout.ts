import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class CheckoutPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Elements = {
        addToCartButton: "//*[@id='add-to-cart-sauce-labs-backpack']",
        cartButton: "//*[@id='shopping_cart_container']",
        btnCheckout: "//*[@id='checkout']",
        btnContinueShopping: "//*[@id='continue-shopping']",
        inputFirstName:"//*[@id='first-name']",
        inputLastName:"//*[@id='last-name']",
        inputPostalCode:"//*[@id='postal-code']",
        btnContinue:"//*[@id='continue']",
        btnFinish:"//*[@id='finish']",
        completeCheckout:"id= 'checkout_complete_container'",
        btnBackHome:"//*[@id='checkout_complete_container']",
        badgeCart:"//*[@id='shopping_cart_container']/a/span"
    }

    async addToCart(){
        await this.page.locator(this.Elements.addToCartButton).click();
    }
    
    async navigateToCartPage(){
        await this.page.locator(this.Elements.cartButton).click();
    }

    async clickButtonCheckout(){
        await this.page.locator(this.Elements.btnCheckout).click();
    }

    async fillCheckoutInformation(firstname: string, lastname: string, postalcode: string){
        await this.page.locator(this.Elements.inputFirstName).type(firstname);
        await this.page.locator(this.Elements.inputLastName).type(lastname);
        await this.page.locator(this.Elements.inputPostalCode).type(postalcode);
        await this.page.locator(this.Elements.btnContinue).click();
    }
    
    async clickButtonFinish(){
        await this.page.keyboard.press('End');
        await this.page.locator(this.Elements.btnFinish).click();
    }

    async clickButtonContinue(){
        await this.page.locator(this.Elements.btnContinue).click();
    }

    async assertCheckoutSuccess(){
        await this.page.locator(this.Elements.completeCheckout).isVisible();
    }

    async assertSuccessAddToCart(){
        await this.page.locator(this.Elements.badgeCart).isVisible();
    }
}