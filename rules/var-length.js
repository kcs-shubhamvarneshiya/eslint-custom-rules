/**
 * @author : "Shubham Varneshiya"
 * @version : 1.0.8
 */
module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "Enforce length of variable names",
        category: "Stylistic Issues",
        recommended: true
      },
      schema: []
    },
    create(context) {
      return {
        VariableDeclarator(node) {
          const name = node.id.name;
          if (name && name.length <= 2) {
            context.report({
              node,
              message: "Variable length should be more then 2 chararter"
            });
          }
        }
      };
    }
  };
  