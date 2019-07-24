# Changelog

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
