/**
 * @fileoverview Rule to flag use of console object
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const eslint = require("eslint");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

    ClassDeclaration: ["id", "superClass", "body"],
    FunctionDeclaration: ["id", "params", "body"],
    FunctionExpression: ["id", "params", "body"],
    ExpressionStatement: ["expression"],

    ClassExpression: ["id", "superClass", "body"],
        MemberExpression: ["object", "property"],
        NewExpression: ["callee", "arguments"],
module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow the use of `new Date` and `Date.now`. This rule is to enforce DateFactory usage.",
            category: "Possible Errors",
            recommended: false
        },
        messages: {
            unexpected: "Unexpected `new Date`/`Date.now` statement. You should be using the DateFactory, which is accessible through ApplicationInstance."
        }
    },

    create(context) {
        let UNWANTED_CLASS_NAME = "Date";
        let UNWANTED_FUNCTION_NAME = "now";

        /**
         * Checks whether the given reference is 'console' or not.
         *
         * @param {eslint-scope.Reference} reference - The reference to check.
         * @returns {boolean} `true` if the reference is 'console'.
         */
        function isDate(reference) {
            const id = reference.identifier;

            return id && id.name === UNWANTED_CLASS_NAME;
        }

        /**
         * Checks whether the property name of the given MemberExpression node
         * is allowed by options or not.
         *
         * @param {ASTNode} node - The MemberExpression node to check.
         * @returns {boolean} `true` if the property name of the node is allowed.
         */
        function isAllowed(node) {
            const propertyName = astUtils.getStaticPropertyName(node);

            return propertyName && allowed.indexOf(propertyName) !== -1;
        }

        /**
         * Checks whether the given reference is a member access which is not
         * allowed by options or not.
         *
         * @param {eslint-scope.Reference} reference - The reference to check.
         * @returns {boolean} `true` if the reference is a member access which
         *      is not allowed by options.
         */
        function isMemberAccessExceptAllowed(reference) {
            const node = reference.identifier;
            const parent = node.parent;

            return (
                parent.type === "MemberExpression" &&
                parent.object === node &&
                !isAllowed(parent)
            );
        }

        /**
         * Reports the given reference as a violation.
         *
         * @param {eslint-scope.Reference} reference - The reference to report.
         * @returns {void}
         */
        function report(reference) {
            const node = reference.identifier.parent;

            context.report({
                node,
                loc: node.loc,
                messageId: "unexpected"
            });
        }

        return {
            "Program:exit"() {
                const scope = context.getScope();
                const dateVar = eslint.getVariableByName(scope, UNWANTED_CLASS_NAME);
                const shadowed = dateVar && dateVar.defs.length > 0;

                /*
                 * 'scope.through' includes all references to undefined
                 * variables. If the variable 'console' is not defined, it uses
                 * 'scope.through'.
                 */
                const references = dateVar
                    ? dateVar.references
                    : scope.through.filter(isDate);

                if (!shadowed) {
                    references
                        .filter(isMemberAccessExceptAllowed)
                        .forEach(report);
                }
            }
        };
    }
};