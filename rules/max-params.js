/**
 * @author : Shubham Varneshiya
 * @version : 1.0.3
 */

module.exports = {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Enforce a maximum number of parameters for functions',
        category: 'Stylistic Issues',
        recommended: true,
      },
      schema: [
        {
          type: 'object',
          properties: {
            maxParams: {
              type: 'integer',
              minimum: 0,
            },
          },
          additionalProperties: false,
        },
      ],
    },
    create: function (context) {
      const { maxParams = 3 } = context.options[0] || {}; // Default maximum parameters to 3 if not provided
  
      return {
        FunctionDeclaration(node) {
          if (node.params.length > maxParams) {
            context.report({
              node,
              message: `Function has more than ${maxParams} parameters.`,
            });
          }
        },
        FunctionExpression(node) {
          if (node.params.length > maxParams) {
            context.report({
              node,
              message: `Function has more than ${maxParams} parameters.`,
            });
          }
        },
      };
    },
  };
  