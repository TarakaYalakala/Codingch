{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "rules": 
        "singleQuote": false, // Use single quotes instead of double quotes
        "endOfLine": "auto", // Maintain consistent end of line behavior across environments
        "semi": true,
      }
    ]
  },
  "settings": {
    "tailwindcss": {
      "callees": ["classnames", "clsx", ""] // Tailwind utility class detection for specific libraries
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": [
        "@typescript-eslint",
    
      ],
      "rules": {
        // ✅ Disable original unused-vars checks (not auto-fixable)
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
s": "error",
 
        // ✅ Import sorting
        "simple-import-sort/imports": "warn",
        
 
        // Tailwind class safety
        "tailwindcss/no-custom-classname": "warn"
      }
    },
    {
      "files": ["components.json"],      "
      "rules": {
        "jsonc/sort-keys": "error"
      }
    }
  ]
}