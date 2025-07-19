import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';  // импорт парсера

const compat = new FlatCompat();

export default [
  ...compat.extends('next/core-web-vitals', 'plugin:@typescript-eslint/recommended'),
  {
    languageOptions: {
      parser: tsParser,  // передаём объект, а не строку
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'semi': 'off',
      'quotes': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];