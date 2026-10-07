# saucedemo-playwright-testing

## Overview

This project contains Playwright end-to-end tests for the SauceDemo e-commerce application.

The automation covers login scenarios as well as the main user journey from login to successful order completion.

## Application

SauceDemo

## Tools & Technologies

- Playwright
- JavaScript
- Node.js
- Git
- GitHub

## Automated Test Flow

The project includes automated tests for login functionality as well as the main SauceDemo purchase journey.

### Login Testing

The `login.spec.js` test file covers different login scenarios, including:

1. Login with valid credentials
2. Login with empty username and password
3. Validation of login error messages
4. Verification of successful login and navigation to the products page
5. Logout after successful login

### End-to-End Purchase Flow

The automated E2E test covers the following main user journey:

1. Open SauceDemo
2. Login with valid credentials
3. Verify successful login
4. Select a product
5. Add the product to the cart
6. Verify the product is added to the cart
7. Open the cart
8. Proceed to checkout
9. Enter checkout information
10. Verify the checkout overview
11. Complete the order
12. Verify successful order completion

## Test Files

- `tests/login.spec.js` – Login scenarios and validation
- `tests/checkout.spec.js` – End-to-end purchase flow

## Test Credentials

Username: `standard_user`  
Password: `secret_sauce`

## Setup

Clone the repository:

```bash
git clone <repository-url>
cd saucedemo-playwright-testing
npm install
npx playwright install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run the login tests:

```bash
npx playwright test tests/login.spec.js
```

Run the checkout tests:

```bash
npx playwright test tests/checkout.spec.js
```

## Test Report

After running the tests, the Playwright HTML report can be opened using:

```bash
npx playwright show-report
```

## Automation Approach

The tests were designed with the following points in mind:

- Meaningful assertions are used to verify important application behavior.
- Readable and maintainable selectors are used where possible.
- Tests are kept independent to avoid unnecessary dependencies between test cases.
- Playwright's built-in waiting and assertions are used instead of unnecessary hard-coded waits.
- The automation focuses on the main end-to-end user journey rather than adding unnecessary test code.

## AI Assistance

AI was used as a supporting tool during test development.

It was used to:

- Suggest possible test scenarios and edge cases.
- Assist with Playwright syntax and test structure.
- Review selectors and assertions.
- Help troubleshoot and improve the automation.

The AI-generated suggestions were manually reviewed and validated against the SauceDemo application. Changes were made where necessary based on the actual application behavior.

