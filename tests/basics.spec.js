//browser is a fixture provides  access to browser to run teststep..reusable set up function 1.preDefined             2.Userdefined
//context fixture: To create fresh browser session(like incognito no cookies)
//page fixture: To create single browser tab (create tab:all actions perform)

import { test,expect } from '@playwright/test'

test('browserContext playwrighttest',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.amazon.ca')
}) 

//test : used to create testcase/ expect to validate, '@playwright/test' is the official playwright test runner package
//  used to write,execute and validate 
//test: to define testcase , async:
//context variable //await:wait until operation complete //newContext() to create new browser context 
// newPage() to open a new  tab //goto : url launch
// browser starts-> session create -> tab created -> url launch
//by default headless mode...headed mode
//slowmo 

test('browserContext1 playwrighttest',async({page})=>{ //only: to execute this tc //page : automatically created
    
    await page.goto('https://www.amazon.ca')
}) 
/*
test('browser3',async({page})=>{
    await page.goto('https://www.youtube.com/')
})
    */
//next wait module