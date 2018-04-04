# Lab 37: Cookies & Auth
This is a front end application similar to Instagram.

## Configuration
```
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── action
│   │   └── auth-actions.js
│   ├── component
│   │   ├── app
│   │   │   └── index.js
│   │   ├── auth-form
│   │   │   └── index.js
│   │   └── landing-container
│   │       └── index.js
│   ├── index.html
│   ├── lib
│   │   ├── app-create-store.js
│   │   ├── redux-reporter.js
│   │   ├── redux-thunk.js
│   │   └── util.js
│   ├── main.js
│   └── reducer
│       ├── auth.js
│       └── index.js
└── webpack.config.js
```

## Installation

1. Fork and clone [Sluggram](https://github.com/slugbyte/sluggram). Follow documentation on how to properly install and setup the backend.

2. Fork and clone [cfgrammm](https://github.com/bishang/37-cookies-and-auth).

3. Within the directory `lab-bessie` in your terminal run `npm i` to install dependancies.

4. To build the application locally, run `npm run watch`. This will build the app in memory.

5. Access the app by navigating to `http://locahost:8080` in your browser.