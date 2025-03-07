import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { closeAll } from '../../../src/browser/close-all.js';
import { getBrowser } from '../../../src/browser/get-browser.js';
import { createConfig } from '../../../src/create-config.js';

describe('getBrowser', async () => {
    const config = createConfig();
    const browser = await getBrowser({ config });

    after(async () => await closeAll([browser]));

    await it('launches firefox', async () => {
        const expected = 'firefox';
        const actual = browser.browserType().name();

        assert.equal(actual, expected);
    });

    await it('launches in headless', async () => {
        assert.ok(browser._options.headless, 'browser is not set in headless mode');
    });
});
