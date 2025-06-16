import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config({ path: './tests/Chapter05/.env' });

test('Use ENV variable on a demo page', async ({ page }) => {
  // Go to forgot password page
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  // Fill the email from .env
  await page.fill('#email', process.env.TEST_EMAIL || 'test@example.com');

  // Click the retrieve button
  await page.click('#form_submit');

  // Wait for the #content to contain any new text
  const confirmationMessage = page.locator('#content');

  // Optional: add this if DOM may take a while to update
  await confirmationMessage.waitFor({ state: 'visible', timeout: 10000 });

  // Check what's actually there (helps debugging)
  const messageText = await confirmationMessage.textContent();
  // Uncomment the following line for debugging purposes
  // console.log('Message found:', messageText);

  // Assert the message
  await expect(confirmationMessage).toContainText("Your e-mail's been sent!");
});
