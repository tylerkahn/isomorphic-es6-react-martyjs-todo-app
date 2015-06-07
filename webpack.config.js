var webpack = require('webpack');

module.exports = {
  extensions: [
    '',
    '.jsx', '.js',
    '.json',
    '.html',
    '.css', '.styl', '.scss', '.sass'
  ],

  module: {
    loaders: [
      // Compile es6 to js.
      {
        test: /app\/.*\.jsx?$/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },

      { test: /\.html$/, loader: 'html-loader'},

      { test: /\.json$/, loader: 'json-loader' },

      // Styles
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.s(a|c)ss$/, loader: "style!css?localIdentName=[path][name]---[local]---[hash:base64:5]!postcss!sass" },

      // Fonts
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

    ],

    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  },

  postcss: [
    require('postcss-local-scope'),
    require('autoprefixer-core')
  ],

  node: {
    net: "empty",
    fs: "empty"
  },

  devtool: 'source-map',
  cache: true


};
