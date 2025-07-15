import test from "@playwright/test";

test("Basic locator-3",async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","dilip@testleaf.com")
    await page.fill("#password","Leaf@123")
    await page.locator("#Login").click()
    await page.locator(".slds-icon-waffle").click()
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Individuals")
    await page.locator("//mark[text()='Individuals']").click()
    await page.locator("(//a[@class='slds-button slds-button_reset'])[7]").click()
    await page.locator("//span[text()='New Individual']").click()
   await page.getByPlaceholder("Last Name").fill("Poornima")
   await page.locator(" //span[text()='Save']").click()
   const pagetitle= page.title()
   console.log(pagetitle)
})