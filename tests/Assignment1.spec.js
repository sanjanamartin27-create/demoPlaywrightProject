//Assignment Questions:
/*create new file Assignment https://selenium.qabible.in/simple-form-demo.php
Simple Form Demo
Checkbox Demo
Radio Buttons Demo
Select Input

multiple testcases in single file

visual testing next topic
*/

import {firefox, test} from '@playwright/test'
/*
test.use({
    viewport: { width: 1920, height: 1080 }
})
    */

test('Simple Form Demo page', async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const enterMessage=page.locator("//input[@id='single-input-field']")
    await enterMessage.fill('Hi, I am interested in learning more about the opportunity')
    const showMessageButton=page.locator("//button[@id='button-one']")
    await showMessageButton.click()
    const twoInputFieldValueA=page.locator("//input[@id='value-a']")
    await twoInputFieldValueA.fill('5')
    const twoInputFieldValueB=page.locator("//input[@id='value-b']")
    await twoInputFieldValueB.fill('5')
    const getTotalButton=page.locator("//button[@id='button-two']")
    await getTotalButton.click()

})


test('Checkbox Demo page', async({page})=>{
    await page.goto('https://selenium.qabible.in/check-box-demo.php')
    const singleCheckbox=page.locator("//input[@id='gridCheck']")
    await singleCheckbox.check()
    const multipleCheckbox1=page.locator("//input[@id='check-box-two']")
    await multipleCheckbox1.check()
    const multipleCheckbox2=page.locator("//input[@id='check-box-four']")
    await multipleCheckbox2.check()
})


test('Radio button single and group Demo page',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php')
    const genderRadioButton=page.locator("//input[@id='inlineRadio2']")
    await genderRadioButton.click()
    const showSelectedButton=page.locator("//button[@id='button-one']")
    await showSelectedButton.click()
    const patientsGender=page.locator("//input[@id='inlineRadio21']")
    await patientsGender.click()
    const patientsAgeGroup=page.locator("//input[@id='inlineRadio23']")
    await patientsAgeGroup.click()
    const getResults=page.locator("//button[@id='button-two']")
    await getResults.click()
})



test.only('Select Input Demo page', async({page})=>{
    await page.goto('https://selenium.qabible.in/select-input.php')
    const selectColor=page.locator('#single-input-field')
    await selectColor.selectOption({value:'Red'})
    const selectMultiColor=page.locator('#multi-select-field')
    await selectMultiColor.selectOption({value:'Yellow'})
    await selectMultiColor.selectOption({value:'Green'})
                                                                //           confirmation needed!!!
})



/*
test.only('Form submit',async({page})=>{
    await page.goto('https://selenium.qabible.in/form-submit.php')
    const firstName=page.locator("//input[@id='validationCustom01']")
    await firstName.fill('Sanjana')
    const lastName=page.locator("//input[@id='validationCustom02']")
    await lastName.fill('Martin')

})

*/

//next static visual testing then dynamic visual testing