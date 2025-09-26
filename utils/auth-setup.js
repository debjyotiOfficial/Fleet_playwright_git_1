const { chromium } = require('@playwright/test');

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    // Navigate to the login page
    await page.goto('https://www.gpsandfleet-server1.com/gpsandfleet/adminnew/view/login.php');

    // Wait for the login form to be visible
    await page.waitForSelector('#username, #password', { timeout: 10000 });

    // Fill in login credentials
    const username = process.env.FLEET_USERNAME || 'debjyoti';
    const password = process.env.FLEET_PASSWORD || '@Debjyoti0411';

    // Fill username field
    await page.locator('#username').fill(username);

    // Fill password field
    await page.locator('#password').fill(password);

    // Submit the form
    await page.locator('.submit').click();

    // Wait for navigation after login
    await page.waitForLoadState('networkidle', { timeout: 30000 });

    // Wait for successful login indicators (adjust selectors based on your app)
    try {
      await page.waitForSelector('.dashboard, .main-content, .user-menu, [data-testid="dashboard"]', { timeout: 15000 });
    } catch (e) {
      console.log('Warning: Could not detect successful login indicator. Proceeding anyway...');
    }

    // Save authentication state
    await context.storageState({ path: 'storageState.json' });
    console.log('Authentication state saved to storageState.json');

  } catch (error) {
    console.error('Login setup failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

module.exports = globalSetup;