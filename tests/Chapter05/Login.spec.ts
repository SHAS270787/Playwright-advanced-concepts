import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import * as dotenv from 'dotenv';
import testData from './Data/test-data.json';

dotenv.config();

test.describe('Login using POM + .env + JSON data', () => {
  for (const data of testData) {
    test(`Login test for ${data.username}`, async ({ page }) => {
      const login = new LoginPage(page);
      const baseURL = process.env.BASE_URL || 'https://www.saucedemo.com';

      await login.goto(baseURL);
      await login.login(data.username, data.password);

      if (data.username === 'standard_user') {
        await login.assertLoginSuccess();
      } else {
        await login.assertLoginError();
      }
    });
  }
});
