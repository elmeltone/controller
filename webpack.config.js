var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
   output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  },
  watch: true
};
