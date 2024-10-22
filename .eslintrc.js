
let recommended = require('./dist/configs/recommended').default;

module.exports = [
    ...recommended,
    {
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname
            }
        }
    }
];
