"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                "eol-last": ["error", "always"],
                "array-bracket-spacing": ["error", "never"],
                "array-element-newline": ["error",
                    {
                        "minItems": 2
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
                "no-var": "off",
                "no-explicit-any": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": ['error', 'always'],
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-angle-bracket-type-assertion": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/array-type": ['error', 'generic'],
                "@typescript-eslint/explicit-member-accessibility": "off"
            }
        }
    ]
};
//# sourceMappingURL=recommended.js.map