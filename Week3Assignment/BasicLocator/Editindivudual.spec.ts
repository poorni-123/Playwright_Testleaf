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
    await page.getByPlaceholder("Search this list...").fill("Poornima")
    await page.keyboard.press('Enter')

   await page.locator('table tbody tr:first-child td:last-child button').click()
   
   await page.locator("(//a[@title='Edit'])").click()
   await page.locator("(//a[@class='select'])[1]").click()
   await page.locator("//a[@title='Mr.']").click()
   await page.locator("//input[@class='firstName compoundBorderBottom form-element__row input']").fill("S")
   await page.locator("//button[@title='Save']").click()
   const pagetitle=page.title()
   console.log(pagetitle)
})