### VSCode i18n-ally 용 setting.json(로컬 세팅)

{"i18n-ally.enabledFrameworks": [
"i18next",
"react-i18next",
"react",
"vscode"
],
"i18n-ally.enabledParsers": ["json", "json5", "js", "ts"],
"i18n-ally.localesPaths": "./locales",
"i18n-ally.pathMatcher": "{locale}.json",
"i18n-ally.extract.autoDetect": true,
"i18n-ally.editor.preferEditor": true,
"i18n-ally.dirStructure": "auto",
"i18n-ally.displayLanguage": "ko",
"i18n-ally.preferredDelimiter": ".",
"i18n-ally.keystyle": "nested"}

### 실행

- npm i
- npm start

### 로그인 구현

- react query로 api 사용
- react router dom에서 RouterProvider 이용해서 routing 구현
- context, reducer로 로그인 시 전역으로 사용할 정보 관리
