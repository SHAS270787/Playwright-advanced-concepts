import test, { expect } from "@playwright/test";

interface LoginData {
  username: string;
  password: string;
  expectedMessage: string;
}

const loginData: LoginData[] = [
  {
    username: 'user1',
    password: 'wrongpass',
    expectedMessage: 'Invalid credentials'
  },
  {
    username: 'user2',
    password: 'correctpass',
    expectedMessage: 'Login successful'
  }
];

test.describe('Data-driven login tests', () => {
  for (const data of loginData) {
    test(`Login test for user: ${data.username}`, async ({ page }) => {
      // Example usage
      await page.goto('https://example.com/login');
      await page.fill('#username', data.username);
      await page.fill('#password', data.password);
      await page.click('#loginBtn');
      await expect(page.locator('#message')).toHaveText(data.expectedMessage);
    });
  }
});
