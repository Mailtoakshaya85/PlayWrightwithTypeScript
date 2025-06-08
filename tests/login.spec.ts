// Login test example
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('Login test', async ({ page }: { page: import('@playwright/test').Page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await expect(page).toHaveURL('https://demoqa.com/profile');
});
