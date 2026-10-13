/*E2E testing: verify application based on users point of view 

Advantages: test complete user journey,cross browser testing,paralel testing ,
new e2e spec file
saucedemo.com  enter 1st uername and pass login , add to cart, goto cart, checkout, enter fill everything,finish

*/

import{test,expect} from '@playwright/test'
test('E2E testing in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")

    // Validate login fields are visible and enabled

    const userName=page.locator('#user-name')
    await expect(userName).toBeVisible()
    await expect(userName).toBeEnabled()
    await userName.fill('standard_user')


    const password=page.locator('#password')
    await expect(password).toBeVisible()
    await expect(password).toBeEnabled()
    await password.fill('secret_sauce')

    //Login button

    const loginButton=page.locator("//input[@id='login-button']")
    await expect(loginButton).toBeVisible()
    await expect(loginButton).toBeEnabled()
    await loginButton.click()
    console.log('Login successfull')

    //Navigate to product list page
       
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const pageTitle = page.locator('.title')
    await expect(pageTitle).toBeVisible()
    await expect(pageTitle).toHaveText('Products')

    //Add to cart functionality

    const addToCart=page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']")
    await expect(addToCart).toBeVisible()
    await expect(addToCart).toBeEnabled()
    await addToCart.click()

    //View Cart functionality 

    const viewCart=page.locator('.shopping_cart_link')
    await viewCart.click()
    await expect(viewCart).toBeVisible()
    await expect(viewCart).toBeEnabled()

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
    await expect(page.locator('.cart_quantity')).toHaveText('1')
    await expect(page.locator('.inventory_item_price')).toHaveText('$9.99')

    console.log('Product validation passed')

    //Checkout page

    const checkout=page.locator('#checkout')
    
    await expect(checkout).toBeVisible()
    await expect(checkout).toBeEnabled()
    await expect(checkout).toHaveText('Checkout')
    await checkout.click()
    console.log('Checkout ')

    //Address Info    

    const firstName=page.locator('#first-name')
    await firstName.fill('Sanjana')
    const lastName=page.locator('#last-name')
    await lastName.fill('Martin')
    const zipCode=page.locator('#postal-code')
    await zipCode.fill('680741')

    //Payment and order placement 

    const continueButton=page.locator('#continue')
    await expect (continueButton).toBeVisible()  
    await expect (continueButton).toBeEnabled()
    await continueButton.click()
    await expect(page.locator('.title')).toHaveText('Checkout: Overview')
    await expect(page.locator('.inventory_item_price')).toHaveText('$9.99')
    await expect(page.getByText('Payment Information:')).toBeVisible()
    await expect(page.getByText('Shipping Information:')).toBeVisible()
    await expect(page.getByText('Price Total')).toBeVisible()
    await expect(page.locator('.summary_total_label')).toHaveText('Total: $10.79')  //doubt about value 

    // Complete order placement

    const finishButton=page.locator('#finish')
    await expect(finishButton).toBeVisible()
    await expect(finishButton).toBeEnabled()
    await expect(finishButton).toHaveText('Finish')
    await finishButton.click()

    // Order confirmation page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!') 
    console.log("Finished exec")
})

// Rewrite e2e with just one assertion 
//NEXT CALENDERVALIDATION