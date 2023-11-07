module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    
    "overrides": [
        {
            files: ['*.js'], // 파일 패턴을 지정합니다. 이 부분이 필수입니다.
            env: {
              node: true
            },
            "env": {
                "node": true
            },
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
        {
            "extends": ["plugin:prettier/recommended"]
          }
    ],
    "rules": {
    }
      
}
