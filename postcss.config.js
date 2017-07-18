module.exports = {
  plugins: {
    'postcss-import': {
      path: './src/styles',
    },
    'postcss-cssnext': {
      browsers: ['> 1%', 'last 4 versions'], // http://browserl.ist/
    },
  },
};
