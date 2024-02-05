const {test, expect} = require('@playwright/test')
import { defineConfig } from '@playwright/test';


test('Verify New Registration - Ace OnlineShoeportal', async({ page }) =>{
    await page.goto('https://anupdamoda.github.io/AceOnlineShoePortal/index.html');
    await page.waitForSelector('#menuToggle > input[type=checkbox]');
    await page.click('#menuToggle > input[type=checkbox]');
    await page.waitForSelector('#menu > a:nth-child(2) > li');
    await page.click('#menu > a:nth-child(2) > li');
    await page.waitForSelector('#NewRegistration');
    await page.click('#NewRegistration');
    await page.locator('#firstname').type('Robert');
    await page.locator('#lastname').type('Dunett');
    await page.locator('#emailId').type('Robert.Dunnett@gmail.com');
    await page.locator('#contactNumber').type('0513773');
    await page.locator('#usr').type('Robert.Dunett@gmail.com')
    await page.locator('#pwd').type('P@sword!');
    //await page.locator('#first_form > div > div:nth-child(28) > center > input').click({ timeout: 60000 }); // Increase timeout to 60 seconds
    await page.locator('xpath=//input[@type="submit" and @value="Submit"]').click();


})