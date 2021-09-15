module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': ['./src/components'],
          '@hooks': ['./src/hooks'],
          '@pages': ['./src/pages'],
          '@routes': ['./src/routes'],
          '@services': ['./src/services'],
          '@styles': ['./src/styles'],
          '@util': ['./src/util'],
        },
      },
    ],
  ],
};
