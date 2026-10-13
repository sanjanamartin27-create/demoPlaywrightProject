import{test,expect} from '@playwright/test'
test('Static visual testing in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    //baseline screenshot (1st screenshot) 2nd execution (screenshot) and compare
   // await page.waitForLoadState('networkidle')        no need of networkidle here      //validate screenshot 1 and 2 : expect keyword
    await expect(page).toHaveScreenshot('saucedemo.png',{
    threshold:0.2   // threshold: amount of color diff 0.1=10% ....max 0.2 (0 is very strict)
    //baseline screenshot (first screenshot) : npx playwright test staticVisualtesting.spec --update-snapshots
    //second screenshot : npx playwright test staticVisualtesting.spec

    })
})