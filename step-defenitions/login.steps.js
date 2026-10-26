import {Given,When,Then} from "@cucumber/cucumber"
import assert from "assert" //assertion library
import {chromium} from 'playwright'
import { setDefaultTimeout } from "@cucumber/cucumber"
setDefaultTimeout(30000)
let browser
let page
//copy from feature
Given('The user is on the login page',async function(){
    browser=await chromium.launch({headless:false,slowMo:1000}) //NOT FROM PLAYWRIGHT.CONFIG
    page=await browser.newPage()
    await page.goto('https://www.saucedemo.com/')

})

When('The user enters valid username and valid password',async function() {
    const usernamefield=page.locator('#user-name')
    await usernamefield.fill('standard_user') //retry npx cucumber-js Features/login.feature --import step-defenitions/login.steps.js --retry 2
    const passwordfield=page.locator('#password')
    await passwordfield.fill('secret_sauce')
})
//invalid login
When('The user enters invalid username and invalid password',async function() {
    const usernamefield=page.locator('#user-name')
    await usernamefield.fill('standard_u')
    const passwordfield=page.locator('#password')
    await passwordfield.fill('secret_s')
})

When('The user clicks the login button',async function(){
    const loginButton=page.locator('#login-button')
    await loginButton.click()
})

Then('The user should navigate to the inventory page',async function(){
    await page.waitForURL('https://www.saucedemo.com/inventory.html') 
    assert.ok(page.url().includes('https://www.saucedemo.com/inventory.html')) //assertion
    await browser.close()   //to close browser
})
//invalid login
Then('An error message should be displayed',async function(){
    const invalidLogin=await page.locator('[data-test="error"]')
    const actualMessage = await invalidLogin.textContent()
    assert.strictEqual(actualMessage,'Epic sadface: Username and password do not match any user in this service')
    await browser.close()   //to close browser
})


//Run: npx cucumber-js Features/login.feature --import step-defenitions/login.steps.js //es module:import
//npx cucumber-js Features/login.feature --import step-defenitions/login.steps.js --retry 2
//npx cucumber-js Features/inventory.feature --import step-defenitions/inventory.steps.js  