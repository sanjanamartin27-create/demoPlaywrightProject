//Create and Run a demo login test
//Playwright sample login tests

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://selenium.qabible.in/index.php')
  await page.getByRole('link', { name: 'Date Pickers' }).click()
  await page.locator('#single-input-field').click()
  await page.getByRole('columnheader', { name: 'October' }).click()
  await page.getByRole('columnheader', { name: '2026' }).click()
  await page.getByRole('columnheader', { name: '«' }).click()
  await page.locator('#single-input-field').click()
  await page.locator('#single-input-field').click()
    await page.locator('#single-input-field').click()

  await page.getByText('1997').click()
  await page.getByText('Aug').click()
  await page.getByRole('cell', { name: '15' }).click()
  await page.locator('#button-one').click()
})
  // await page.pause()
  // await page.locator('#single-input-field').click()
