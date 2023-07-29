module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'react',
        'react-hooks',
    ],
    "rules": {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'no-underscore-dangle': 0,
        'no-console': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
    }
}
