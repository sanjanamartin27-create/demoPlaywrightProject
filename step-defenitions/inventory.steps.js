//Hooks: block of code executed at specific points during the test execution 
// Types:
// 1. Beforeall: once before all scenarios 
// 2.Afterall:once after all scenarios
//3.before:before every scenario
//4.after:after every scenario
//5.before step (steps given when then)
//6.After step
import { Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout } from "@cucumber/cucumber"
import { chromium } from "@playwright/test"
import assert from "assert"


setDefaultTimeout (30000)

let browser
let context
let page

BeforeAll(async function() {
    browser=await chromium.launch({headless:false,slowMo:1000})
})

AfterAll(async function () {
    if(browser){
        await browser.close()
    }
})
//before each senario
Before(async function () {
    context=await browser.newContext()
    page=await context.newPage()

})
After(async function (Scenario) {
    //capture screenshot and store example(stored in project dir)
    try{
        if(Scenario.result.status===Status.FAILED){
            const screenshot=await page.screenshot()//to take scrnsht
            this.attach(screenshot,'image/png')//format image/png
        }
    }
    catch(err){
        console.log('After hook error',err.message)
    }
    finally{
        if(context){
            await context.close
        }
    }
})

BeforeStep(async function () {
    console.log('The step started')
})

AfterStep(async function () {
    console.log('The step completed')
})

Given('The user is on Application login page',async function(){
    await page.goto('https://www.saucedemo.com/',{
        waitUntil:'load', //to load page completely
        timeout:30000
    })
})

When('The user enters username {string} and password {string}',async function (usernameval,passwordval) {
    const usernamefield=page.locator('#user-name')
    await usernamefield.fill(usernameval)
    const passwordfield=page.locator('#password')
    await passwordfield.fill(passwordval)
    const loginButton=page.locator('#login-button')
    await loginButton.click()
})

Then('The user should see result {string}',async function (result) {
    if(result==='Inventory Page'){
        await page.waitForURL('https://www.saucedemo.com/inventory.html',{timeout:10000})
    }
    else if(result==='Error message'){
        const error=await page.locator('[data-test="error"]').textContent()
        assert.ok(error.includes('Epic sadface')) //partial message copied (includes)
    }
})

Then('Inventory item count should be {string}',async function(itemcount){
    if(itemcount==='0') return 
    const items=await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(itemcount)) //convert from string to num
})
