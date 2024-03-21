module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"plugins": [
		"@typescript-eslint",
		"prettier"
	],
	"rules": {
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"prefer-destructuring": ["error",{
			"array": true,
			"object": true
		}, {
			"enforceForRenamedProperties": false
		}]
		
	}
};