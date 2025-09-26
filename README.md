# Fleet Management Playwright Test Suite

This is a comprehensive Playwright test suite for the Fleet Management platform, providing automated testing for various fleet management functionalities.

## Project Structure

```
Fleet_Playwright_1/
├── fixtures/           # Test data and configuration files
│   └── tlr-config.json # Test configuration with URLs, selectors, and test data
├── tests/              # Test specification files
│   ├── TS001_listOfDevice.spec.js
│   ├── TS002_addEditDevices.spec.js
│   ├── TS003_ChangeTimezone.spec.js
│   ├── TS004_viewEditUser.spec.js
│   ├── TS005_subgroup.spec.js
│   ├── TS006_trackInfoDisplayOptions.spec.js
│   ├── TS007_pulsingIcon.spec.js
│   ├── TS008_alertsContact.spec.js
│   ├── TS009_changeAlertSettings.spec.js
│   ├── TS010_scheduledReports.spec.js
│   ├── TS011_addEditMaintenanceContact.spec.js
│   └── TS012_maintainanceReport.spec.js
├── utils/              # Helper utilities
│   ├── config-loader.js    # Configuration loader utility
│   ├── global-setup.js     # Global test setup
│   ├── global-teardown.js  # Global test teardown
│   └── test-helpers.js     # Common test helper functions
├── package.json        # Node.js dependencies and scripts
├── playwright.config.js # Playwright configuration
└── README.md          # This file
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Install Playwright Browsers**
   ```bash
   npm run install-browsers
   ```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (Browser Visible)
```bash
npm run test:headed
```

### Run Tests with UI Mode
```bash
npm run test:ui
```

### Debug Tests
```bash
npm run test:debug
```

### View Test Reports
```bash
npm run test:report
```

### Generate Test Code
```bash
npm run test:codegen
```

## Configuration

### Test Configuration (`fixtures/tlr-config.json`)
Contains:
- **URLs**: Different environment URLs for testing
- **Credentials**: Login credentials for test users
- **Selectors**: CSS selectors for UI elements
- **Test Data**: Expected values and test data
- **Timeouts**: Various timeout configurations

### Playwright Configuration (`playwright.config.js`)
Configures:
- Test directory and file patterns
- Browser projects (Chrome, Firefox, Safari)
- Reporter settings (HTML, JSON, JUnit)
- Global setup and teardown
- Output directories for test artifacts

## Test Features

### Supported Test Scenarios
- Device management (list, add, edit)
- User management and permissions
- Timezone configuration
- Subgroup management
- Track info display options
- Pulsing icon preferences
- Alerts and contact management
- Alert settings configuration
- Scheduled reports
- Maintenance contact management
- Maintenance reports

### Test Helpers (`utils/test-helpers.js`)
- **Login automation**: Handles authentication flow
- **Navigation helpers**: Common navigation patterns
- **Storage management**: Clears cookies and storage
- **Element interaction**: Waits and clicks with proper timing
- **Configuration loading**: Centralized config management

## Reports and Artifacts

After test execution, the following artifacts are generated:

- **HTML Report**: `test-reports/html/index.html`
- **JSON Report**: `test-reports/json/test-results.json`  
- **JUnit Report**: `test-reports/junit.xml`
- **Screenshots**: `test-results/` (on failures)
- **Videos**: `test-results/` (on failures)
- **Traces**: Available for debugging failed tests

## Troubleshooting

### Common Issues

1. **Timeout Errors**: Increase timeout values in `tlr-config.json`
2. **Element Not Found**: Verify selectors in the configuration file
3. **Login Failures**: Check credentials and URL configurations
4. **Browser Installation**: Run `npm run install-browsers` if browsers are missing

### Debugging Tips

- Use `npm run test:headed` to see tests running in the browser
- Use `npm run test:debug` to step through tests
- Check screenshots and videos in `test-results/` folder
- Use trace viewer for detailed debugging of failed tests

## Contributing

1. Add new test files following the naming convention: `TS###_testName.spec.js`
2. Update selectors in `tlr-config.json` when UI changes
3. Add new helper methods to `test-helpers.js` for reusable functionality
4. Update this README when adding new features or configurations

## License

MIT License