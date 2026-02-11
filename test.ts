{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": false, // Use single quotes instead of double quotes
        "endOfLine": "auto", // Maintain consistent end of line behavior across environments
        "semi": true, // Omit semicolons at the end of statements
        "trailingComma": "all"
      }
    ]
  },
  "settings": {
    "tailwindcss": {
      "callees": ["classnames", "clsx", "ctl", "cva", "tv", "cn"] // Tailwind utility class detection for specific libraries
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort"
      ],
      "rules": {
        // ✅ Disable original unused-vars checks (not auto-fixable)
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
 
        // ✅ Use this instead (auto-fixable on --fix or lint-staged)
        "unused-imports/no-unused-imports": "error",
 
        // ✅ Import sorting
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
 
        // Tailwind class safety
        "tailwindcss/no-custom-classname": "warn"
      }
    },
    {
      "files": ["components.json"],
      "parser": "jsonc-eslint-parser",
      "rules": {
        "jsonc/sort-keys": "error"
      }
    }
  ]
}