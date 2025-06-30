import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Debug log
console.log('Loaded BASE_URL from .env:', process.env.BASE_URL);

export default defineConfig({
  testDir: './tests/Chapter05',
  timeout: 30 * 1000, // 30 seconds
  expect: {
    timeout: 5000,
  },
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  // Optional: Start dev server before running tests
  webServer: {
    command: 'npm run dev', // or `vite`, or your actual dev start command
    url: 'http://localhost:5173', // update if different
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
