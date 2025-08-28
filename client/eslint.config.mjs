// client/eslint.config.mjs
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    ignores: [".next/**"],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      "@next/next": nextPlugin,
      "react": reactPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Base rules from plugins
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,

      
      "react/no-unescaped-entities": "off", // Fixes apostrophe errors
      "react/react-in-jsx-scope": "off",   // Fixes "'React' must be in scope"
      "react/prop-types": "off",           // Fixes "is missing in props validation"
    },
    settings: {
      react: {
        version: "detect",
      },
    }
  },
];

export default config;