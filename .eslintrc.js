module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: "babel-eslint",
    extends: 'airbnb',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'babel'
    ],
    rules: {
    },
};