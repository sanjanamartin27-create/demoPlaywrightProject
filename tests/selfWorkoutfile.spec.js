import {test} from '@playwright/test'
test('Login using name and pass',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
  //  const username=page.locator("//input[@wfd-id='id1']")  //error
    const username=page.locator("//input[@name='username']")
    await username.fill('admin')
    const password=page.locator("//input[@name='password']")
    await password.fill('admin')
    const loginButton=page.locator("//button[text()='Sign In']")
    await loginButton.click()    
})

