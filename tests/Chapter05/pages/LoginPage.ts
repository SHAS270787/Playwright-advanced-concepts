import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async assertLoginSuccess() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async assertLoginError() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
