import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import testData from '../utils/testData.json' //testData.key
// Valid login using valid username and password

test.only('Login using valid username and password',async({page})=>{
    const usernameValue=testData.validusername
    const passwordValue=testData.validpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernameValue)
    await login.fillPasswordOnPasswordField(passwordValue)
    await login.clickOnLoginButton() //for traces to debug visually: to open trace file: npx playwright show-trace test-results/login-Login-using-valid-username-and-password-chromium/trace.zip

    await login.validateSuccessfullLogin()
})

// Invalid login using invalid username and password

test('Login using invalid username and invalid password',async({page})=>{
    const usernameValue=testData.invalidUsername
    const passwordValue=testData.invalidPassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernameValue)
    await login.fillPasswordOnPasswordField(passwordValue)
    await login.clickOnLoginButton()
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service') 
})

//Invalid username and valid password

test('Login using invalid username and valid password',async({page})=>{
    const usernameValue=testData.invalidUsername
    const passwordValue=testData.validpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernameValue)
    await login.fillPasswordOnPasswordField(passwordValue)
    await login.clickOnLoginButton()
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service') 

})

//Valid username and invalid password

test('Login using valid username and invalid password',async({page})=>{
    const usernameValue=testData.validusername
    const passwordValue=testData.invalidPassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernameValue)
    await login.fillPasswordOnPasswordField(passwordValue)
    await login.clickOnLoginButton()
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service') 

})

//Page designing technique: reduce complexity: Page object model (POM): login page: page class,spec file





//new folder install playwright signupbutton click -enter username and pass ans signup signup.specfile and page class using json add assertion in spec or page
//tc2: same spec tc2 : signup-enter cred-click on close button
//tc3:login.spec.js and loginpage.js files ->click login->.login using valid cred we used in tc1
//tc4:very login with invalid username and valid password