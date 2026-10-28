import{test as base,expect} from '@playwright/test'
const test=base.extend({
    validLogin:async({page},use)=>{
        await page.goto('https://www.saucedemo.com/')
        const username= page.locator('#user-name')
        await username.fill('standard_user')
        const password= page.locator('#password')
        await password.fill('secret_sauce')
        const loginButton=page.locator('#login-button')
        await loginButton.click() //line 3 to 10 define fixture
        await use(page)
    }
})
export {test,expect}