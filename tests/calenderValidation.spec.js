import{test,expect} from '@playwright/test'
test('Calender Validation in playwright',async({page})=>{
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const dateInput= page.locator('#single-input-field')
    await dateInput.click()
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()    //dropdown assertion
    const targetYear=1997
    const switchButton=page.locator('.datepicker-switch:visible')       //hidden
    await switchButton.click()
    await switchButton.click()
    let attempts=10   //decade range
    while(attempts--){  //decrement attempts
        const decadeText=await switchButton.innerText()         //fetch decade text eg:2020-2029
        const startYear=parseInt(decadeText.split('-')[0].trim()) //trim 
        if(targetYear>=startYear && targetYear<=startYear+9)     //1997>=2020  not satisfied ..1997>=2010 not satisfied..1997>=2000 no..1990>=1997
        break
        await page.locator('.prev:visible').click()
        
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()
    await page.locator('.month:visible').filter({hasText:'Aug'}).click()
    await page.locator('.day:not(.old):not(.new)',{hasText:/^15$/}).click()     //Regular expression ^15$     //not to choose old and new 
    const showDateButton=page.locator('#button-one')
    await showDateButton.click()
 
})