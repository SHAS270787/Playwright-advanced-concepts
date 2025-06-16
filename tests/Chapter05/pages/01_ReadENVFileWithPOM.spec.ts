import { test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { GoogleSearchPage } from './GoogleSearchPOM.spec';

dotenv.config();

test('Google search using POM and ENV', async ({ page }) => {
  const searchPage = new GoogleSearchPage(page);

  await searchPage.goto();
  await searchPage.search(process.env.SEARCH_TERM || 'Playwright by testers talk');
  await searchPage.verifyResults();
});
