import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import parserTs from "@typescript-eslint/parser"

export default [
  stylistic.configs.customize({
    indent: 2,
    quotes: "single",
    semi: false,
    jsx: true,
  }),
  ...tseslint.config(
    ...tseslint.configs.stylistic,
  ),
  {
    plugins: {
      "@stylistic/ts": stylisticTs,
    },
    languageOptions: {
      parser: parserTs,
    },
    rules: {
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "comma",
            requireLast: true,
          },
          singleline: {
            delimiter: "comma",
            requireLast: true,
          },
        },
      ],
    },
  },
]
