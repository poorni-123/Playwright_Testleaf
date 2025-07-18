import test, { expect } from "@playwright/test";

test("Locator and Assertion assignment-2",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoCSR2")
    await page.fill("#password","crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("#label").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Find Leads']").click()
    await page.fill("#ext-gen248","Poornima")
    await page.locator("#ext-gen334").click()
    await page.locator("//a[text()='11234']").click()
    await page.locator("//a[text()='Edit']").click()
    await page.fill("#updateLeadForm_companyName","Cognizant")
    await page.fill("#updateLeadForm_annualRevenue","3000000")
    await page.fill("#updateLeadForm_departmentName","CSE")
    await page.fill("#updateLeadForm_description","Test")
    await page.locator("(//input[@type='submit'])[1]").click()
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Cognizant")
    await expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText("$3,000,000.00")
    await expect(page.locator("#viewLead_departmentName_sp")).toHaveText("CSE")
    await expect(page.locator("#viewLead_description_sp")).toHaveText("Test")



})