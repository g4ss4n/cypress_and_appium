const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve('/Users/ghassangharzuzy/Makerspace/src/components/postDetails/PostDetails.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
