import  {Given, When, Then} from "@cucumber/cucumber"
import {Page, Browser, Expect, expect} from "@playwright/test"
import { pageFixture  } from "../../hooks/pageFixture";

let browser:Browser;
let page:Page;

When('I select to sort products by "Price - Low to High"', async function() {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.locator('//*[@id="header_container"]/div[2]/div/span/select').selectOption('lohi');
});

Then('The products should be displayed in ascending order of price', async function() {
  // Write code here that turns the phrase above into concrete actions
  const sortValue = await pageFixture.page.locator('//*[@id="header_container"]/div[2]/div/span/span').textContent();
  expect(sortValue).toContain('low to high')
});