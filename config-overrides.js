const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  // Add a custom Webpack rule to exclude ESLint warnings from the error overlay
  addWebpackModuleRule({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('eslint-loader'),
        options: {
          emitWarning: true,
          emitError: false,
        },
      },
    ],
  })
);
