import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      '**/.*',
      '**/.serverless/**',
      '.terraform/*',
      'terraform.tfstate',
      'terraform.tfstate.backup',
      '*.tfstate',
      '*.tfstate.backup',
      'terraform.tfvars',
      '*.zip',
      'build/*',
      '**/node_modules/',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  eslintConfigPrettier,
]
