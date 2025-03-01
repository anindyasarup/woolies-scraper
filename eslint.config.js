import antfu from '@antfu/eslint-config';

export default antfu({
    lessOpinionated: true,
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true
    },
    rules: {
        'test/no-import-node-test': ['off'],
        'no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
        }],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/max-len': ['error', { code: 80, ignoreStrings: true, ignoreUrls: true }]
    }
});
