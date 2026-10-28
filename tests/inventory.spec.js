import{test,expect} from '../utils/customfixture.js'




test('Verify inventory page',async({validLogin})=>{
    await expect(validLogin).toHaveURL('https://www.saucedemo.com/inventory.html')
})