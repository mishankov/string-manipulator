import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

export default [
	{
		ignores: [
			'**/.DS_Store',
			'**/node_modules',
			'build',
			'.svelte-kit',
			'package',
			'**/.env',
			'**/.env.*',
			'!**/.env.example',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock'
		]
	},
	js.configs.recommended,
	...tsPlugin.configs['flat/recommended'],
	...svelte.configs['flat/recommended'],
	eslintConfigPrettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			ecmaVersion: 2022,
			sourceType: 'module'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

		languageOptions: {
			parserOptions: {
				parser: tsParser,
				projectService: true,
				extraFileExtensions: ['.svelte'],
				svelteConfig
			}
		},
		rules: {
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
];
