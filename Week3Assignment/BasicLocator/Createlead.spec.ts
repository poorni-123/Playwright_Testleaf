import test from "@playwright/test";

test("Basic locator-1",async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","dilip@testleaf.com")
    await page.fill("#password","Leaf@123")
    await page.locator("#Login").click()
    await page.locator(".slds-icon-waffle").click()
    await page.locator("(//p[@class='slds-truncate'])[6]").click()
    await page.locator("(//span[@class='slds-truncate'])[4]").click()
    await page.locator("//div[@title='New']").click()
    await page.locator("(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])").first().click()
    await page.getByTitle("Mrs.").click()
    await page.getByPlaceholder("First Name").fill("Poornima")
    await page.getByPlaceholder("Last Name").fill("Gokulram")
    await page.fill("//input[@name='Company']","CTS")
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(10000)
    
})