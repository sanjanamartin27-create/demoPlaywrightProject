// Topic: locator
//  placeholder attribute="Username" attribute value , <> tags
import { test } from '@playwright/test'
test('Locators in playwright',async({page})=>{ 
        await page.goto('https://www.saucedemo.com/')
        const usernameField=page.locator('#user-name') // 1. id Locator: # if id attribute is present(id is unique)
       // const passwordField=page.locator('.input_error form_input') //2. Class locator . : same class shared by multiple elements (mostly duplicates)
        //const loginButton=page.locator('#login-button')
        const passwordField=page.locator("//input[@id='password']") //locating using xpath
        const loginButton=page.locator("//input[@id='login-button']")
        //type or fill :  2 types
        // Type:

       // await usernameField.type('sanjana')
        //await usernameField.type('Martin')    //existing value will not be replaced automatically
        
        //fill:

        await usernameField.fill('standard_user')
        await passwordField.fill('secret_sauce')        //remove existing value and replace with new value
        //click
        await loginButton.click()              //click
        //special locators: 1.Role 2.Text  ....
        // ARIA Applications (Accessible rich internet application: user friendly (by looking at the attribute its understood))//aria-label="Page navigation"
    
    
    })
test('Special locators in playwright',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
    const userName=page.locator("//input[@name='username']")
    await userName.fill('admin')
    const password=page.locator("//input[@name='password']")
    await password.fill('admin')
    const submitButton=page.locator("//button[text()='Sign In']")
    await submitButton.click()
    await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
   // await page.getByRole('button').nth(5).click()                                     // nth(0),first,last,nth(indexposition)
    await page.getByText('Active').nth(1).click()
})
//xpath next topic ()   
// absolute: selection from root node
// /html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input
//Relative xpath :syntax     //tagname[@attribute='attribute value'] 
//xpath using text          //tagname[text()='sample text']

