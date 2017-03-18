const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve("./src/index.js"),
  },

  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/assets",
        to: "./assets"
      }
    ])
  ],

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: "elm-webpack-loader",
        options: {
          verbose: true,
          warn: true,
          cwd: __dirname
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],
    noParse: /\.elm$/
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
    stats: { colors: true }
  }
};
