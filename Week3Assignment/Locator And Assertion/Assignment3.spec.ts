import test, { expect } from "@playwright/test";

test("Locator and Assertion assignment-3",async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.getByLabel("username").fill("dilip@testleaf.com")
    await page.getByLabel("password").fill("Leaf@123")
    await page.locator("#Login").click()
    await expect (page).toHaveURL("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await expect(page).toHaveTitle("Home | Salesforce")
    await page.locator(".slds-icon-waffle").click()
    await page.getByText("View All").click()
await page.getByPlaceholder("Search apps or items...").fill("Service")
  await page.keyboard.press('Enter')
  await page.locator("(//p[@class='slds-truncate'])[1]").click()
  await page.locator("a[title='Accounts']").click()
  await page.getByRole("button",{name:"New"}).click()
  await page.fill("input[id='input-274']","Poornima")
  await page.locator("//button[@class='slds-button slds-button_brand']").click()
  



})