import  {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser} from "@playwright/test"
import { pageFixture  } from "../../hooks/pageFixture";


let browser:Browser;
let page:Page;

Given('the login page is open', async function() {
  // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.goto("https://www.saucedemo.com/")
});

Given('I enter valid username {string} and password {string}', async function(username, password) {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.locator("//*[@id='user-name']").type(username);
  await pageFixture.page.locator("//*[@id='password']").type(password);
});

When('I click the login button', async function() {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.locator("//*[@id='login-button']").click();
});

Then('I should be redirected to the dashboard', async function() {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.locator("//*[@id='header_container']").isVisible();
});