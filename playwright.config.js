// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  testDir: './tests',

  fullyParallel: true,

  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    // 📸 Debugging & Reporting
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',

    // 🌍 Environment
    headless: false,
    locale: 'en-US',
    timezoneId: 'Asia/Jakarta',
    ignoreHTTPSErrors: true,

    // 🤖 Anti-bot tweaks
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/123.0.0.0 Safari/537.36',

    launchOptions: {
      slowMo: 500,
      args: [
        '--start-maximized',
        '--disable-blink-features=AutomationControlled',
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    }
  },

  projects: [
    {
      name: 'chromium',
      use: {
        channel: 'chrome', 
        viewport: null     
      }
    }
  ]
});