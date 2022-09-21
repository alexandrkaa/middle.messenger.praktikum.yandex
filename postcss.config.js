module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("precss"),
  ],
};
