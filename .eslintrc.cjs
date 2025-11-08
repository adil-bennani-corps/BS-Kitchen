let prettierConfig = 'eslint-config-prettier';

try {
  require.resolve('eslint-config-prettier');
} catch (error) {
  prettierConfig = './eslint-config-prettier.cjs';
}

module.exports = {
  extends: ['next/core-web-vitals', prettierConfig]
};
