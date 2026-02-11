{
  "extends": [
    "next/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      {
        "singleQuote": false, // Use single quotes instead of double quotes
        "endOfLine": "au
        "semi": true, // O
        "trailingComma": "all"
      }
    ]
  },
  "settings": {
    "tailwindcss": {
      "callees": ["classnames", "
    }
  },
  "overrides": [
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort"
      ],
      "rules": {
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
 
        "unused-imports/no-unused-imports": "error",
 
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "tailwindcss/no-custom-classname": "warn"
      }
    },
    {
      "files": ["components.json"],
      "parser": "jsonc-eslint-parser",
      "rules": {
      }
    }
  ]
}