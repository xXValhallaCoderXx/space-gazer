const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const cssnano = require("cssnano");

/********************
 * DEVELOPMENT CONFIGS
    - Functions below are for helping with Development Process
********************/

exports.devServer = ({host, port} = {}) => ({
  // Handles the WDS for Development
  devServer: {
    stats: "errors-only",
    hotOnly: true,
    historyApiFallback: true,
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.generateSourceMaps = ({type}) => ({
  // Handles the type of Source map to use
  devtool: type
});

/********************
 * BUILD CONFIGS
    - Functions below are for helping with Building / Deployment
********************/

exports.clean = path => ({
  // Clean the current build folder to ensure to old files are leftover
  plugins: [new CleanWebpackPlugin([path], {allowExternal: true})]
});

exports.minifyJavaScript = () => ({
  // Minify JS Code
  optimization: {
    minimizer: [new TerserPlugin({sourceMap: true})]
  }
});

exports.minifyCSS = ({options}) => ({
  // Minify CSS Code
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
});

exports.imageMin = () => ({
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: '70'
      },
      plugins: [imageminMozjpeg({quality: 70})]
    })
  ]
})

/********************
 * UTIL FUNCTIONS
    - Functions below provide extra utilities for either enviroment
********************/

exports.setFreeVariable = (key, value) => {
  // Sets a global variable which can be accessed throughout the app
  const env = {};
  env[key] = JSON.stringify(value);
  return {
    plugins: [new webpack.DefinePlugin(env)]
  };
};

exports.setFreeVariables = data => {
  const env = {};
  Object.keys(data).forEach(function(key) {
    env[key] = JSON.stringify(data[key]);
  });
  return {
    plugins: [new webpack.DefinePlugin(env)]
  };
};

/********************
 * LOADERS
    - Various loader functions for different uses
********************/

// Javascript Loader
exports.loadJavaScript = ({include, exclude} = {}) => ({
  context: path.resolve(__dirname, "../"),
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        include,
        exclude,
        use: {
          loader: "babel-loader",
          options: {
            // configFile: path.resolve(__dirname, '../babel.config.js'),
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      workers: 1
      // watch: [include[0], include[1]]
    })
  ]
});

// Image Loader
exports.loadImages = ({include, exclude, options} = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options
        }
      }
    ]
  }
});

exports.fontLoader = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
});

// Load CSS for Development
exports.developmentCSS = () => ({
  module: {
    rules: [
      {
        test: /^((?!\.module).)*scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.module.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]_[hash:base64:8]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
});

// Extract CSS
exports.extractCSS = () => {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "static/styles/[name].[hash:8].css"
      })
    ],
    module: {
      rules: [
        {
          test: /^((?!\.module).)*scss$/,

          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: '../'
              }
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            },
            autoprefix()
          ]
        },
        {
          test: /\.module.scss$/,

          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]_[hash:base64:8]"
              }
            },
            {
              loader: "sass-loader"
            },
            autoprefix()
          ]
        }
      ]
    }
  };
};

autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()]
  }
});
