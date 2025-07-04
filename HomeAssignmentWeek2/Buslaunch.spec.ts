import test, { chromium, firefox } from "@playwright/test"

test("pagetest1",async()=>{
     const browser=await chromium.launch({channel:'msedge',headless:false})// To launch browser by giving specific browser.
     const context = await browser.newContext() // Open a window / context
    const page = await context.newPage() // Open a new page (new tab)
    await page.goto("https://www.redbus.in/") 
    await page.waitForTimeout(3000) 
    const pagetitle =await page.title()
    console.log(pagetitle)
    const pageurl = page.url()
    console.log(pageurl)

    



})

test("pagetest",async()=>{
     const browser=await firefox.launch({headless:false})// To launch browser by giving specific browser.
    const context = await browser.newContext() // Open a window / context
    const page = await context.newPage() // Open a new page (new tab)
    await page.goto("https://www.flipkart.in/") 
    await page.waitForTimeout(3000) 
    const pagetitle1 =await page.title()
    console.log(pagetitle1)
    const pageurl1 = page.url()
    console.log(pageurl1)



})