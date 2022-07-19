module.exports = {
  presets: [
    "@babel/env",
    // 编译react
    "@babel/preset-react",
    // 编译ts
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "mdNote",
        libraryDirectory: "lib", // default: lib
      },
    ],
  ],
};
