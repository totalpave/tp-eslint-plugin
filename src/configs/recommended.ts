
import base from './base';
import eslint from "@eslint/js";
import tslint from 'typescript-eslint';

// Does not currently support eslint v9
// import lintPromises from 'eslint-plugin-promise';

export default [
    eslint.configs.recommended,
    ...tslint.configs.recommended,
    ...base
]
