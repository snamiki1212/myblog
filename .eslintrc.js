module.exports={
  "parser": "@typescript-eslint/parser", // TS で必要
  "plugins": [
    "react",
    "@typescript-eslint" // TS で必要
  ],
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended", // TS で必要
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  "parserOptions":  {
    "ecmaVersion":  2018,  // Allows for the parsing of modern ECMAScript features
    "sourceType":  "module",  // Allows for the use of imports
  },
  "rules": {
    // "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    // "react/no-danger": "off",
    // "jsx-a11y/anchor-is-valid": [ "error", {
    //   "components": [ "Link" ],
    //   "specialLink": [ "hrefLeft", "hrefRight", "to" ],
    //   "aspects": [ "noHref", "invalidHref", "preferButton" ]
    // }]
    "@typescript-eslint/no-explicit-any": "off"
  },
  "settings": {
    "import/core-modules": []
  },
  "env": {
    "browser": true,
    "node":true
  }
}
