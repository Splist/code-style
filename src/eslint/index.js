const baseRules = require('./rules/base.json');
const typeScriptRules = require('./rules/typeScript.json');
const tsxRules = require('./rules/tsx.json');

/**
 * Base config.
 * Extends the ESLint recommended rules and Prettier's plugin.
 */
const base = {
    rules: baseRules,
    env: { node: true, es6: true },
    extends: ['eslint:recommended', 'eslint-config-prettier'],
    parserOptions: { ecmaVersion: 2019 }
};

/**
 * TypeScript config.
 * Extends parts of the base config but uses the TypeScript ESLint parser.
 * Requires `@typescript-eslint/parser` to be installed.
 */
const typeScript = {
    ...base,
    rules: typeScriptRules,
    extends: [
        ...base.extends,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    env: {
        ...base.env,
        commonjs: true
    },
    plugins: ['@typescript-eslint']
};

/**
 * TypeScript & React config.
 * Extends the base config but uses the TypeScript ESLint parser and a few Prettier plugins.
 * Requires `@typescript-eslint/parser` to be installed.
 */
const tsx = {
    ...typeScript,
    rules: {
        ...typeScript.rules,
        ...tsxRules
    },
    parserOptions: {
        ...typeScript.parserOptions,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    env: {
        node: false,
        browser: true,
        es6: true
    },
    plugins: [...typeScript.plugins, 'react-hooks'],
    extends: [...typeScript.extends, 'plugin:react/recommended', 'eslint-config-prettier/react'],
    settings: {
        react: {
            version: 'detect'
        }
    }
};

module.exports = {
    base,
    typeScript,
    tsx
};
