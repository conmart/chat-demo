const path = require('path')

const projDir = path.join(__dirname, '../../../..')

module.exports = {
  entry: './src/components/index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    library: 'OpenChair',
    libraryTarget: 'umd',
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
}
