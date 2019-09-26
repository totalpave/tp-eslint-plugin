
export default {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                "eol-last": ["error", "always"],
                "array-bracket-spacing": ["error", "never"],
                "array-element-newline": ["error", 
                    {
                        "minItems": 3,
                        "multiline": true
                    }
                ],
                "array-bracket-newline": [
                    "error",
                    {
                        "minItems": 2
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
                "no-unused-vars": [
                    "error",
                    {
                        "args": "none"
                    }
                ],
                "indent": [
                    "error", 
                    4,
                    {
                        "SwitchCase": 1,
                        "ignoreComments": true
                    }
                ],
                "no-var": 2,
                "no-explicit-any": "off",
                "no-empty-function": "off",
                "react/display-name": "off",
                "eqeqeq": 1
            }
        }
    ]
}