/**
 * @author : Shubham Varneshiya
 * @version : 1.0.2
 */
module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "Disallow console.log() in code",
        category: "Stylistic Issues",
        recommended: true,
      },
      schema: [],
    },
    create: function (context) {
      return {
        CallExpression(node) {
          const { callee } = node;
          if (
            callee.type === "MemberExpression" &&
            callee.object &&
            callee.object.name === "console" &&
            callee.property &&
            callee.property.name === "log"
          ) {
            context.report({
              node,
              message: "Avoid using console.log() in code.",
            });
          }
        },
      };
    },
  };
  