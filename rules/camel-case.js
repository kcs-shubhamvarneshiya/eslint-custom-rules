/**
 * @author : Shubham Varneshiya
 * @version : 1.0.4
 */
module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "Enforce camel case for variable names",
        category: "Stylistic Issues",
        recommended: true
      },
      schema: [] 
    },
    create(context) {
      function isCamelCase(name) {
        return /^[a-z][a-zA-Z0-9]*$/.test(name);
      }
  
      return {
        VariableDeclarator(node) {
          const name = node.id.name;
          if (name && !isCamelCase(name)) {
            context.report({
              node,
              message: "Variable names should be in camel case"
            });
          }
        }
      };
    }
  };