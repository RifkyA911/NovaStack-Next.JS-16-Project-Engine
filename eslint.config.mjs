import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 🔥 off rule any
      'react-hooks/exhaustive-deps': 'off', // 🔥 off rule exhaustive-deps
      '@typescript-eslint/no-unused-vars': 'off', // 🔥 off rule no-unused-vars
      "react/no-unescaped-entities": "off"
    },
  }
]);

export default eslintConfig;
