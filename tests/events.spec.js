//Events: Mouse hover 
import {test} from '@playwright/test'
test('Events in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    const othersMousehover=page.locator('#others')
    await othersMousehover.hover()
})

//next topic: API Testing 

