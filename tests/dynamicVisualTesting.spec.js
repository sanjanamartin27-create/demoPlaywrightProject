import{test,expect} from '@playwright/test'
test('Dynamic Visual testing in playwright',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    //await page.waitForLoadState('networkidle')
    //hide banners and sliders: 
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
    })
    await expect(page).toHaveScreenshot('obscura.png',{
        threshold: 0.2
    })

})


//next calendervalidation and e2e assignment