import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';
import { closeAll } from '../../../src/browser/close-all.js';

describe('closeAll', () => {
    let closeCount;
    const closeSuccessfully = async () => {
        closeCount++;
    };

    beforeEach(() => {
        closeCount = 0;
    });

    it('calls close() on all provided objects', async () => {
        const objects = [
            { close: closeSuccessfully },
            { close: closeSuccessfully },
            { close: closeSuccessfully }
        ];

        const errors = await closeAll(objects);

        assert.equal(closeCount, 3);
        assert.equal(errors.length, 0);
    });

    it('calls close() on all provided objects', async () => {
        const errorMessage = 'encountered an error while closing';

        const closeWithError = async () => {
            throw new Error(errorMessage);
        };

        const objects = [
            { close: closeSuccessfully },
            { close: closeWithError },
            { close: closeSuccessfully }
        ];

        const errors = await closeAll(objects);
        const [actual] = errors;

        assert.equal(closeCount, 2);
        assert.equal(errors.length, 1);
        assert.equal(actual.status, 'rejected');
        assert.equal(actual.reason.message, errorMessage);
    });
});
