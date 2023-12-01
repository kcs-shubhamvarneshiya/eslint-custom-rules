`Javascript Eslint custom rules`

The way to implement custom rules in project

eslint config file
```
// import `semi-eslint-custom-rules` package 
const semiEslintCustomRules = require("semi-eslint-custom-rules");

module.exports = {
  plugins: {"rules" : semiEslintCustomRules},
  rules: {
    // set `warn` instead of `error` if required
    "rules/no-console": "error",
    "rules/max-params" : "error",
    "rules/camel-case.js" : "error",
    "rules/var-length.js" : "error"
  },
};

```