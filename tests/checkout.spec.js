import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';

test('Complete purchase flow', async ({ page }) => {

    // Login
    await page.goto(URL);

    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify login
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    // Select product
    await page.getByText('Sauce Labs Backpack').click();

    // Verify product page
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // Add product to cart
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Verify product was added
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Verify product is in cart
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();

    // Fill checkout information
    await page.getByPlaceholder('First Name').fill('Urooj');
    await page.getByPlaceholder('Last Name').fill('Khan');
    await page.getByPlaceholder('Zip/Postal Code').fill('46000');

    await page.getByRole('button', { name: 'Continue' }).click();

    // Verify checkout overview
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Payment Information')).toBeVisible();

    // Complete order
    await page.getByRole('button', { name: 'Finish' }).click();

    // Verify successful completion
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});