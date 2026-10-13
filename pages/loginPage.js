import { expect } from "@playwright/test"
export class LoginPage{
    //elements and actions
    constructor(page){
        this.page=page
        this.userName=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginButton=page.locator("//input[@id='login-button']")
    }
     //actions -methods outside constructor
    async navigateToApplication(){
        await this.page.goto('https://www.saucedemo.com/')
        
    }

    async fillUsernameOnUsernameField(usernameValue){
        await this.userName.fill(usernameValue)
    }

    async fillPasswordOnPasswordField(passwordValue){
        await this.password.fill(passwordValue)
    }

    async clickOnLoginButton(){
        await this.loginButton.click()
    }

    async validateSuccessfullLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }


}