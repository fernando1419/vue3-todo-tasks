import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import vueRecommended from 'eslint-plugin-vue/lib/configs/vue3-recommended.js';
import vueParser from 'vue-eslint-parser';

export default [
   {
      files: ['**/*.vue'],
      languageOptions: {
         parser: vueParser,
         parserOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
         },
      },
      plugins: {
         vue,
      },
      rules: {
         ...vueRecommended.rules,
         'vue/no-unused-properties': ['warn', {
            groups: ['props', 'setup'],
            deepData: true,
         }],
      },
   },
   {
      files: ['**/*.ts', '**/*.js'],
      languageOptions: {
         parser: tsParser,
         ecmaVersion: 2022,
         sourceType: 'module',
      },
      plugins: {
         '@typescript-eslint': ts,
      },
      rules: {
         ...ts.configs.recommended.rules,
         'no-console': 'warn',
         "no-undef": "off",
         "@typescript-eslint/no-unused-vars": "warn",
         "@typescript-eslint/explicit-function-return-type": "off",
         "@typescript-eslint/no-explicit-any": "warn",
         "@typescript-eslint/no-inferrable-types": "off",
         "@typescript-eslint/no-non-null-assertion": "error",
         "eqeqeq": ["error", "always"],
         "curly": ["error", "all"],
         "no-const-assign": "error",
         "no-var": "error",
         "prefer-const": "error",
         "no-debugger": "error",
         "no-trailing-spaces": "error",
         "comma-dangle": ["error", "always-multiline"],
         "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
         "semi": ["error", "always"],
         "indent": ["error", 3, { "SwitchCase": 1 }],
         "object-curly-spacing": ["error", "always"],
         "no-shadow": "error",
         "no-duplicate-imports": "error",
         "no-multiple-empty-lines": ["error", { max: 1 }],
         "arrow-spacing": ["error", { before: true, after: true }],
         "no-param-reassign": "error",
         "no-return-await": "error",
         "no-unsafe-finally": "error",
         "prefer-template": "error",
         "spaced-comment": ["error", "always"],
         "yoda": "error",
         "array-bracket-spacing": ["error", "never"],
         "block-spacing": ["error", "always"],
         "eol-last": ["error", "always"],
         "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
         "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
         "no-mixed-spaces-and-tabs": "error",
         "padded-blocks": ["error", "never"],
         "space-in-parens": ["error", "never"],
         "space-infix-ops": "error",
         "space-unary-ops": ["error", { "words": true, "nonwords": false }],
         "switch-colon-spacing": ["error", { "after": true, "before": false }],
      },
   },
   {
      ignores: ['node_modules', 'dist', 'coverage'],
   },
];
