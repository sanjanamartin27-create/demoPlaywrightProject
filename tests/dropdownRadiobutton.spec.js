//dropdown button Radio button
import {test} from '@playwright/test'
test('Handling dropdown in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const dropdown=page.locator("#dropdowm-menu-1")
    //1.index:
   // await dropdown.selectOption({index:2})
   //2.value attribute
   //await dropdown.selectOption({value:'c#'})
   //3.text or label
    await dropdown.selectOption({label:'SQL'})
})



test('Handling checkbox in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const checkbox=page.locator("//input[@value='option-1']")
    //.click or .check //uncheck: one more click //check uncheck
    await checkbox.check()
   // await checkbox.uncheck()
    //assertion: validate: checkbox checked or not
    console.log(await checkbox.isChecked())
    //url: tohaveurl
    //title: tohavetitle ,tobevisible,tobeenabled,tobedisabled//

})


test.only('Using Radio button',async({page})=>{
        await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        const radiobutton=page.locator("//input[@value='yellow']")
        await radiobutton.click()

})

