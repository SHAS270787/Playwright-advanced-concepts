import { test, expect } from './fixtures/custom-fixtures';

test('Login using POM + fixtures + JSON + .env', async ({ loginPage, testData }) => {
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
  await expect(await loginPage.getTitleText()).toHaveText(testData.expectedText);
});
