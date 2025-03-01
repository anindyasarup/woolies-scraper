import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { closeAll } from '../../../src/browser/close-all.js';
import { getBrowser } from '../../../src/browser/get-browser.js';
import { getNewPage } from '../../../src/browser/get-new-page.js';
import { createConfig } from '../../../src/create-config.js';

describe('getNewPage', async () => {
    const config = createConfig();
    const browser = await getBrowser({ config });
    const browserContext = await browser.newContext();

    const [page1, page2] = await Promise.all([
        getNewPage({ browser }),
        getNewPage({ browser })
    ]);

    after(() => closeAll([page1, page2, browserContext, browser]));

    await it('always returns a page from a new browser context', async () => {
        assert.ok(page1.context() !== page2.context());
    });
});
