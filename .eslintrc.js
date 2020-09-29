module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        "object-curly-spacing": ["warn", "always"],
        "prefer-destructuring": ["warn"],
        "no-param-reassign": ["warn"],
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "max-len": [
            "warn",
            {
                "code": 80,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreComments": true
            }
        ],
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "react/jsx-key": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                "\*\*/\*.test.js",
                "\*\*/\*.test.jsx",
                "\*\*/\*.test.ts",
                "\*\*/\*.test.tsx",
                "src/tests/\*\*/\*"
                ]
            }
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "react/jsx-boolean-value": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-wrap-multilines": "off",
        "react/destructuring-assignment": "off",
        "react-hooks/exhaustive-deps": "off"
    },
  };