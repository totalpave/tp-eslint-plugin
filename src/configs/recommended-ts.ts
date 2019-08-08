
export default {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                "eol-last": ["error", "always"],
                "array-bracket-spacing": ["error", "never"],
                "array-element-newline": ["error", 
                    {
                        "minItems": 3
                    }
                ],
                "array-bracket-newline": [
                    "error",
                    {
                        "minItems": 3
                    }
                ],
                "comma-dangle": ["error", "never"],
                "comma-spacing": ["error", {
                    "before": false,
                    "after": true
                }],
                "func-call-spacing": ["error", "never"],
                "no-extra-boolean-cast": "off",
                "no-fallthrough": "off",
                // eslint version of this doesn't appear to understand enums
                "no-unused-vars": "off", 
                "indent": [
                    "error", 
                    4,
                    {
                        "SwitchCase": 1,
                        "ignoreComments": true
                    }
                ],
                "no-var": "off",
                "no-explicit-any": "off",
                // https://github.com/typescript-eslint/typescript-eslint/blob/v1.12.0/packages/eslint-plugin/docs/rules/camelcase.md#options
                "camelcase": "off",
                "no-use-before-define": [
                    "error",
                    {
                        "functions": true,
                        "classes": true,
                        "variables": true
                    }
                ],
                "prefer-const": "off",
                "prefer-spread": "off",
                "no-async-promise-executor": "off",
                "no-trailing-spaces": ['error', {
                    "skipBlankLines": true,
                    "ignoreComments": true
                }],
                "brace-style": ["error", "Stroustrup" ],
                "no-template-curly-in-string": "error",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": ['error', 'always'],
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-angle-bracket-type-assertion": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/array-type": ['error', 'generic'],
                "@typescript-eslint/explicit-member-accessibility": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "args": "none"
                    }
                ],
                "@typescript-eslint/camelcase": [
                    "error",
                    {
                        "properties": "never"
                    }
                ],
                "@typescript-eslint/no-triple-slash-reference": "off",
                "@typescript-eslint/triple-slash-reference": "off",
                "@typescript-eslint/prefer-interface": "off",
                "@typescript-eslint/consistent-type-definitions": "off",
                "@typescript-eslint/no-var-requires": "off"
            }
        }
    ]
}