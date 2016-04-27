module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
      'src/**/*.js',
      'test/test_helper.js',
    ],

    tests: [
      'test/components/*.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
