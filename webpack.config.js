const path = require("path")
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          // 'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
      },
    ]
  }
}

const clientConfig =  {
  ...common,
  entry: path.resolve(__dirname,"client","index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  target: 'web',
  
}

const serverConfig =  {
  ...common,
  entry: path.resolve(__dirname,"server","server.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  target: 'node',
  externals: nodeExternals(),  
}

module.exports = [clientConfig,serverConfig];