// Sample Playwright test
import { test, expect } from '@playwright/test';

test('Sample test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
