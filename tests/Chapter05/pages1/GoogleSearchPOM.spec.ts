import { Page, expect } from '@playwright/test';

export class GoogleSearchPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async search(term: string) {
    await this.page.locator('input[name="q"]').fill(term);
    await this.page.keyboard.press('Enter');
  }

  async verifyResults() {
    await this.page.waitForSelector('h3');
    await expect(this.page).toHaveTitle(/Playwright/i);
  }
}
