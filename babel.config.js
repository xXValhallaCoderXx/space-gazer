  module.exports = {
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: ["last 2 versions"]
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  env: {
    development: {
      plugins: ["react-hot-loader/babel"]
    },
    production: {}
  }
};