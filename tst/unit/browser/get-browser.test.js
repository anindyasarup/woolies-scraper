import assert from 'node:assert/strict';
import test, { after, describe } from 'node:test';
import { closeAll } from '../../../src/browser/close-all.js';
import { createConfig } from '../../../src/create-config.js';
import { getBrowser } from '../../../src/setup-browser.js';

describe('getBrowser', async () => {
    const config = createConfig();
    const browser = await getBrowser({ config });

    after(async () => {
        await closeAll([browser]);
    });

    test('launches firefox', async () => {
        const expected = 'firefox';
        const actual = browser.browserType().name();

        assert.equal(actual, expected);
    });
});
