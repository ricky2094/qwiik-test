import { Given, When, Then } from "@cucumber/cucumber";
import CheckoutPage from "../../pages/checkout";
import { pageFixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/checkoutData.json";


let checkoutPage: CheckoutPage;
let assert: Assert;


When('I add product to cart', async function () {
checkoutPage = new CheckoutPage(pageFixture.page);
pageFixture.page.waitForTimeout(5000);
await checkoutPage.addToCart();
await checkoutPage.assertSuccessAddToCart();
await checkoutPage.navigateToCartPage();
});

When('I enter checkout information', async function () {
await checkoutPage.clickButtonCheckout();
await checkoutPage.fillCheckoutInformation(data.firstName, data.lastName, data.postalCode);
});

When('I continue transaction until successful', async function () {
await checkoutPage.clickButtonFinish();

});

Then('I will navigate to checkout success page', async function () {
await checkoutPage.assertCheckoutSuccess()
});