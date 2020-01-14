# Changelog

# 2.3.3
- ident: Ignore descendents of TemplateLiteral nodes.

# 2.3.2
- Fixed a conflict with `keyword-spacing` `super` rule in TypeScript.

# 2.3.1
- Fixed `eqeqeq` rule.

# 2.3.0
- Added `brace-style` rule.
- Added `keyword-spacing` rule.

# 2.2.1
- Added `.npmrc` file.
- Fixed `eqeqeq` rule.

# 2.2.0
- Added strict `eqeqeq` rule.

# 2.1.0
- Added `no-date` rule.
- Disabled `react/display-name` rule.

# 2.0.1
- Force `array-element-newline` rule on linebreaks, regardless of `minItems`.

# 2.0.0
- upgraded support for `@typescript-eslint/eslint-plugin@2.0.0`

# 1.3.1
- Turned `no-var` into an error rule.

# 1.3.0
- Turned on `no-var` rule.

# 1.0.9
- Turned off `no-async-promise-executor` rule.

# 1.0.8
- Turned off `prefer-spread` rule.

# 1.0.7
- Turned off `consistent-type-definition` rule.
- Turned off `prefer-interface` rule.

# 1.0.6
- Turned off `prefer-const` rule as we prefer to only use const with CONSTANTS that should be UPPER_CASE_ONLY.
- Turned on `no-use-before-define` rule to enforce defining functinos, classes, and variables before using them.

# 1.0.5
- Turned off triple slash references as we use them to fill in typing gaps if not supplied by a library

# 1.0.4
- Changed camcelcase rule to not apply to object properties

## 1.0.3
- Removed unneeded dependencies

## 1.0.2
- Separated rules for typescript & non-typescript projects

## 1.0.1 (July 16, 2019)
- Turned off no-inferrable-types
- Turned off no-angle-bracket-type-assertion
- Turned off no-explicit-any

## 1.0.0 (July 16, 2019)
- Initial release
