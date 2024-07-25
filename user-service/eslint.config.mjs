import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
    },
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module',
    },
  },
]
