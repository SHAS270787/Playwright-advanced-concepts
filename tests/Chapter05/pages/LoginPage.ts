import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    console.log('Navigating to URL:', process.env.BASE_URL);
    await this.page.goto(process.env.BASE_URL || 'https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async getTitleText() {
    return this.page.locator('.title');
  }
}
