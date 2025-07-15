import test from "@playwright/test";

test("Basic locator-2",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoCSR2")
    await page.fill("#password","crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//div[@id='label']").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.fill("#createLeadForm_companyName","CTS")
    await page.fill("#createLeadForm_firstName","Poornima")
    await page.fill("#createLeadForm_lastName","Gokulram")
    await page.locator(".smallSubmit").click()
    await page.locator("//a[text()='Edit']").click()
    await page.fill("#updateLeadForm_companyName","Editcompany")
    await page.locator("//input[@value='Update']").click()

})