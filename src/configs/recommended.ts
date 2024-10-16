
export default {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                "eol-last": ["error", "always"],
                "array-bracket-spacing": ["error", "never"],
                "array-element-newline": [
                    "error", 
                    {
                        "ArrayExpression": "consistent"
                    }
                ],
                "array-bracket-newline": [ "error",  "consistent" ],
                "comma-dangle": ["error", "never"],
                "comma-spacing": ["error", {
                    "before": false,
                    "after": true
                }],
                "func-call-spacing": ["error", "never"],
                "no-extra-boolean-cast": "off",
                "no-fallthrough": "off",
                "no-unused-vars": [
                    "warn",
                    {
                        "args": "none"
                    }
                ],
                "indent": [
                    "error", 
                    4,
                    {
                        "SwitchCase": 1,
                        "ignoreComments": true,
                        "ignoredNodes": [
                            "TemplateLiteral *"
                        ]
                    }
                ],
                "no-var": 2,
                "no-explicit-any": "off",
                "no-empty-function": "off",
                "react/display-name": "off",
                "eqeqeq": 2,
                "keyword-spacing": ["error", {
                    "before": true,
                    "after": true
                }],
                "brace-style": ["error", "stroustrup", {
                    "allowSingleLine": true
                }],

                // Will complain on self existence checked function calls, e.g: x && x();
                "no-unused-expressions": "off",

                // Promise Rules
                // See https://www.npmjs.com/package/eslint-plugin-promise
                // At first these will be configured to warn, but in a future
                // major release, expect these to be turned to errors.

                // Requires returning inside each .then
                "promise/always-return": "warn",

                // Enforces promises to be caught if not returned.
                "promise/catch-or-return": "warn"
            }
        }
    ]
}