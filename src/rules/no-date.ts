/**
 * @fileoverview Rule to flag use of console object
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const eslint = require("eslint");
// import eslint from 'eslint';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

    // ClassDeclaration: ["id", "superClass", "body"],
    // FunctionDeclaration: ["id", "params", "body"],
    // FunctionExpression: ["id", "params", "body"],
    // ExpressionStatement: ["expression"],

    // ClassExpression: ["id", "superClass", "body"],
    //     MemberExpression: ["object", "property"],
    //     NewExpression: ["callee", "arguments"],
// module.exports = {
var noDate = {
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
    
    // copied from eslint repo. As for types, not messing with types here. We'll get proper types for our code. 
    getVariableByName(initScope: any, name: any): any {
        let scope: any = initScope;

        while (scope) {
            const variable: any = scope.set.get(name);

            if (variable) {
                return variable;
            }

            scope = scope.upper;
        }

        return null;
    },    

    // copied from eslint repo. As for types, not messing with types here. We'll get proper types for our code. 
    getStaticPropertyName(node: any): any {
        let prop: any;

        switch (node && node.type) {
            case "Property":
            case "MethodDefinition":
                prop = node.key;
                break;

            case "MemberExpression":
                prop = node.property;
                break;

            // no default
        }

        switch (prop && prop.type) {
            case "Literal":
                return String(prop.value);

            case "TemplateLiteral":
                if (prop.expressions.length === 0 && prop.quasis.length === 1) {
                    return prop.quasis[0].value.cooked;
                }
                break;

            case "Identifier":
                if (!node.computed) {
                    return prop.name;
                }
                break;

            // no default
        }

        return null;
    },

    create(context: any): any {
        const UNWANTED_CLASS_NAME: String = "Date";
        // const UNWANTED_FUNCTION_NAME: String = "now";
        const options = context.options[0] || {};
        const allowed = options.allow || [];

        /**
         * Checks whether the given reference is 'console' or not.
         *
         * @param {eslint-scope.Reference} reference - The reference to check.
         * @returns {boolean} `true` if the reference is 'console'.
         */
        function isDate(reference: any): Boolean {
            const id: any = reference.identifier;

            return id && id.name === UNWANTED_CLASS_NAME;
        }

        /**
         * Checks whether the property name of the given MemberExpression node
         * is allowed by options or not.
         *
         * @param {ASTNode} node - The MemberExpression node to check.
         * @returns {boolean} `true` if the property name of the node is allowed.
         */
        function isAllowed(node: any): Boolean {
            const propertyName: any = noDate.getStaticPropertyName(node);

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
        function isMemberAccessExceptAllowed(reference: any): Boolean {
            const node: any = reference.identifier;
            const parent: any = node.parent;

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
        function report(reference: any) {
            const node: any = reference.identifier.parent;

            context.report({
                node,
                loc: node.loc,
                messageId: "unexpected"
            });
        }

        return {
            "Program:exit"() {
                const scope: any = context.getScope();
                const dateVar: any = noDate.getVariableByName(scope, UNWANTED_CLASS_NAME);
                const shadowed: any = dateVar && dateVar.defs.length > 0;

                /*
                 * 'scope.through' includes all references to undefined
                 * variables. If the variable 'console' is not defined, it uses
                 * 'scope.through'.
                 */
                const references: any = dateVar
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

export default noDate;