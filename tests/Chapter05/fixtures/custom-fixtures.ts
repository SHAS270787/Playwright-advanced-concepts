import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../Data/loginData.json';

type MyFixtures = {
  loginPage: LoginPage;
  testData: typeof loginData[0];
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  testData: async ({}, use) => {
    await use(loginData[0]);
  }
});

export const expect = baseTest.expect;
