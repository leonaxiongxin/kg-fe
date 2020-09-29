Web application for visualize and search knowledge graph

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Generation

Start a new project with TypeScript

```bash
npx create-react-app my-app --template typescript
```

Add ESLint packages for TypeScript and Jest support

```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest
```

Integrate ESLint with Prettier rules

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Add hooks for lint

```bash
yarn add -D husky lint-staged
```

## Configuration

```js
// .eslintrc.js
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
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
    'object-curly-spacing': ['warn', 'always'],
    'prefer-destructuring': ['warn'],
    'no-param-reassign': ['warn'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/tests/**/*',
        ],
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
```

```json
// .eslintignore
build/\*
public/\*
src/react-app-env.d.ts
src/serviceWorker.ts
```

```json
// .prettierrc
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "tabWidth": 2
}
```

## Available Scripts

In the project directory, you can run:

```json
// package.json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "format": "prettier --write src/**/*.ts{,x}",
  "lint": "eslint src/**/*.ts{,x} --color"
}
```
