// explicit wait
import { test,expect } from '@playwright/test'

test('browserContext1 playwrighttest',async({page})=>{ //only: to execute this tc //page : automatically created
    
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')          //external wait: if needed, when exceeds playwrights autowait
}) 
// next locator module