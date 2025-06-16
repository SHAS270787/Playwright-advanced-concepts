import { test, expect } from '@playwright/test';
import * as loginData from './Data/test-data.json';

interface LoginData {
  for (: anyconst dataSet: any of: any loginDataTyped: any){
  password: string;
  expectedMessage: string;
}

const loginDataTyped: LoginData[] = loginData as LoginData[];

test.describe('Data-driven login tests', () => {
  for (const dataSet of loginData) {
    test(`Login test for user: ${dataSet.username}`, async ({ page }) => {
      await page.goto('/');

      await page.fill('#user-name', dataSet.username);
      await page.fill('#password', dataSet.password);
      await page.click('#login-button');

      if (dataSet.expectedMessage === 'Products') {
        await expect(page.locator('.title')).toHaveText('Products');
      } else {
        await expect(page.locator('[data-test="error"]')).toContainText(dataSet.expectedMessage);
      }
    });
  }
});
