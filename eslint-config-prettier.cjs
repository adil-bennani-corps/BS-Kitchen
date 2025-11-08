/**
 * Local fallback for `eslint-config-prettier`.
 * Provides a tiny subset of the upstream configuration so ESLint stays compatible
 * with Prettier in environments where installing `eslint-config-prettier` is blocked.
 */
module.exports = {
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx,cts,mts}'],
      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': 'off'
      }
    }
  ]
};
