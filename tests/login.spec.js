import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com/';
const valid_username = 'standard_user';
const valid_password = 'secret_sauce';

//Tast Case 1
test('Test with valid credentials', async ({ page }) => {

    await page.goto(URL);

    await page.getByPlaceholder('Username').fill(valid_username);
    await page.getByPlaceholder('Password').fill(valid_password);
    await page.getByRole('button', { name: 'Login' }).click();

  
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.getByText('Logout').click();

    
    await expect(page).toHaveURL(URL);
    await expect(page.getByPlaceholder('Username')).toBeVisible();
});

//Tast Case 2
test('Login with empty username and password', async ({ page }) => {

    await page.goto(URL);

    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Username is required')).toBeVisible();
});


//Tast Case 3
test('Login with empty username', async ({ page }) => {

    await page.goto(URL);

    await page.getByPlaceholder('Password').fill(valid_password);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Username is required')).toBeVisible();
  });

//Tast Case 4
test('Login with empty password', async ({ page }) => {

    await page.goto(URL);

    await page.getByPlaceholder('Username').fill(valid_username);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Password is required')).toBeVisible();
  });


//Test Case 5
test('Login with invalid username', async ({ page }) => {

    await page.goto(URL);

    await page.getByPlaceholder('Username').fill('Urooj_Riaz');
    await page.getByPlaceholder('Password').fill(valid_password);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.getByText('Username and password do not match')
    ).toBeVisible();
  });

//Test Case 6
test('Login with both invalid credentials', async ({ page }) => {

    await page.goto(URL);

    await page.getByPlaceholder('Username').fill('Urooj_Riaz');
    await page.getByPlaceholder('Password').fill('Urooj');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.getByText('Username and password do not match')
    ).toBeVisible();
  });

//Test Case 7
test('Cannot access inventory directly(Without login)', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL(URL);

    await expect(
      page.getByPlaceholder('Username')
    ).toBeVisible();
  });