import{test,expect} from '@playwright/test'
test('Multiple window in playwright',async({page,context})=>{
    await page.goto('https://demo.guru99.com/popup.php')
    const windowPopUp=context.waitForEvent('page')
    const clickHereButton=page.locator("//a[text()='Click Here']")
    await clickHereButton.click()
    const newWindow=await windowPopUp
    await newWindow.waitForLoadState()
    const emailField=newWindow.locator("//input[@name='emailid']")
    await emailField.fill('sanjana@gmail.com')
    const submitButton=newWindow.locator("//input[@name='btnLogin']")
    await submitButton.click()


})

