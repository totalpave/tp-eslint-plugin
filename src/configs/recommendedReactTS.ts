
export default {
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                "eol-last": ["error", "always"],
                "array-bracket-spacing": ["error", "always"],
                "array-element-newline": ["error", 
                    {
                        "minItems": 3,
                        "multiline": true
                    }
                ],
                "array-bracket-newline": [
                    "error",
                    {
                        "multiline": true,
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
                        "ignoreComments": true,
                        "ignoredNodes": [
                            "TemplateLiteral *"
                        ]
                    }
                ],
                "no-var": 2,
                "no-explicit-any": "off",
                // https://github.com/typescript-eslint/typescript-eslint/blob/v1.12.0/packages/eslint-plugin/docs/rules/camelcase.md#options
                "camelcase": "off",
                // typescript-eslint has a version of this that works, eslint's verison will error on generics and such.
                "no-use-before-define": "off",
                "prefer-const": "off",
                "prefer-spread": "off",
                "no-async-promise-executor": "off",
                "no-trailing-spaces": ['error', {
                    "skipBlankLines": true,
                    "ignoreComments": true
                }],
                "no-template-curly-in-string": "error",
                "@typescript-eslint/explicit-function-return-type": "off",
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        "selector": "variableLike",
                        "format": ["camelCase"]
                    },
                    {
                        "selector": "memberLike",
                        "modifiers": ["private"],
                        "format": ["camelCase"],
                        "prefix": [
                            '$'
                        ]
                    },
                    {
                        "selector": "memberLike",
                        "modifiers": ["protected"],
                        "format": ["camelCase"],
                        "leadingUnderscore": "require"
                    },
                    {
                        "selector": "variable",
                        "types": ["boolean"],
                        "format": ["PascalCase"],
                        "prefix": [
                            "is",
                            "should",
                            "has",
                            "can",
                            "will",
                            "did"
                        ]
                    },
                    {
                        "selector": "typeParameter",
                        "format": ["PascalCase"],
                        "prefix": ["T"]
                    },
                    {
                        "selector": "interface",
                        "format": ["PascalCase"],
                        "prefix": ["I"]
                    },
                    {
                        "selector": "variable",
                        "modifiers": ["const"],
                        "format": ["UPPER_CASE"]
                    }
                ],
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-angle-bracket-type-assertion": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/array-type": ['error', {
                    default: 'array-simple'
                }],
                "@typescript-eslint/explicit-member-accessibility": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "args": "none"
                    }
                ],
                "@typescript-eslint/triple-slash-reference": "off",
                "@typescript-eslint/prefer-interface": "off",
                "@typescript-eslint/consistent-type-definitions": "off",
                "@typescript-eslint/consistent-type-assertions": [
                    'error',
                    {
                        assertionStyle: 'as'
                    }
                ],
                "@typescript-eslint/no-var-requires": "off",
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "off",
                "eqeqeq": 2,
                "keyword-spacing": ["error", {
                    "before": true,
                    "after": true,
                    "overrides": {
                        // Super conflicts with some typescript stuff
                        "super": {
                            "after": false,
                            "before": false
                        }
                    }
                }],
                "brace-style": ["error", "stroustrup", {
                    "allowSingleLine": true
                }]
            }
        }
    ]
}