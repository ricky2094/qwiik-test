import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: './src/tests/api',
    use:{
        headless:true,
        viewport: {width: 1280, height: 720},
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
        extraHTTPHeaders:{
            'Authorization': `Bearer 4814e815429003be74ec615680b93159d4ab4cfa6a9153c4c9011802a764e351`
        },
    },
    projects:[
        {
            name: 'Chromium',
            use: {browserName: 'chromium'}
        }
    ],
}

export default config