// webpack.config.js

const path = require("path");

const isDev = process.env.NODE_ENV == "development";

console.log(path.join(__dirname, "dist"));

const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "js/[name].[hash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
    },
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3100,
    hot: isDev,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\html$/,
        use: "html-loader", //подгружает элементы которые указаны в html
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        generator: {
          filename: "assets/fonts/[name]-[hash][ext]",
        },
        type: "asset/resource", //обрабатывает шрифты
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource", //обрабатывает картинки
        generator: {
          filename: "assets/images/[name]-[hash][ext]",
        },
      },
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(
                __dirname,
                isDev ? "tsconfig.json" : "tsconfig.prod.json"
              ),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "static/img"),
    //       to: path.resolve(__dirname, "dist/static/img"),
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
    }),
  ],
};
