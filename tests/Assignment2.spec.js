// assignment1 next clickme https://selenium.qabible.in/javascript-alert.php
import{test,expect} from '@playwright/test'


test('Alerts in playwright Assignment1',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php') 
    page.on('dialog',async dialog =>{
    expect(dialog.message()).toBe('Press a button!')
    await dialog.accept()
    })
    await page.locator("//button[@class='btn btn-warning']").click()
})


// Assignment2 : Calender Validation

test.only('Calender validation assignment2', async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const dateField=page.locator('#single-input-field')
    dateField.click()
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()    //dropdown assertion
    const targetYear=1980
    const datePicker=page.locator('.datepicker-switch:visible')
    await datePicker.click()
    await datePicker.click()
    let attempts=10
    while(attempts--){
        const decades=await datePicker.innerText() //2020-2029
        const startYear=parseInt(decades.split('-')[0].trim()) //trim  2020
        if(targetYear>=startYear && targetYear<=startYear+9)     //1980>2020
        break
        await page.locator('.prev:visible').click()
    }
    await page.locator('.year:visible').filter({hasText:'1980'}).click()
    await page.locator('.month:visible').filter({hasText:'Aug'}).click()
    await page.locator('.day:not(.old):not(.new)',{hasText:/^16$/}).click()     //Regular expression ^15$     //not to choose old and new 
    const showDateButton=page.locator('#button-one')
    await showDateButton.click()
})





























//2 1870 year in calendervalidation topic
