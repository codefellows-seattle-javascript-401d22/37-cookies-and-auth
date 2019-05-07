# ![cf](https://i.imgur.com/7v5ASc8.png) Lab 37: Cookies & Auth

## Front-End Configuration
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `build` script has been configured for building the app with webpack
  * a `watch` script has been configured for watching the app with webpack-dev-server
* **webpack.config.js**
* **babelrc**
* **src/**
* **src/index.html**
* **src/main.js**
* **src/components**
* **src/actions**
* **src/reducers**
* **src/lib**
* **src/style**

## Installation
* Clone down this repository and `cd` to navigate to the directory
* Run `npm i` to install all dependencies related to the app (for both frontend and backend)
* Run `npm run start` from the backend to start the server, and run `npm run watch` to serve up a localhost instance of the app
* Go to `localhost:8080` to see the local app

* This app was made using `React` and `Redux`. 

## Front end dependencies:
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-plugin-transform-object-rest-spread": "^6.26.0",
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
"clean-webpack-plugin": "^0.1.19",
"css-loader": "^0.28.11",
"dotenv": "^5.0.1",
"extract-text-webpack-plugin": "^3.0.2",
"file-loader": "^1.1.11",
"html-webpack-plugin": "^3.2.0",
"node-sass": "^4.8.3",
"react": "^16.3.0",
"react-dom": "^16.3.0",
"react-redux": "^5.0.7",
"react-router": "^4.2.0",
"react-router-dom": "^4.2.2",
"redux": "^3.7.2",
"sass-loader": "^6.0.7",
"superagent": "^3.8.2",
"uglifyjs-webpack-plugin": "^1.2.4",
"url-loader": "^1.0.1",
"webpack": "^3.11.0",
"webpack-dev-server": "^2.11.2"

## Back end dependencies: 
"aws-sdk": "^2.92.0",
"aws-sdk-mock": "^1.7.0",
"babel": "^6.23.0",
"babel-cli": "^6.24.1",
"babel-core": "^6.25.0",
"babel-loader": "^7.1.1",
"babel-plugin-transform-object-rest-spread": "^6.23.0",
"babel-preset-es2015": "^6.24.1",
"babel-register": "^6.24.1",
"bcrypt": "^1.0.2",
"body-parser": "^1.17.2",
"cookie-parser": "^1.4.3",
"cors": "^2.8.4",
"dotenv": "^4.0.0",
"express": "^4.15.3",
"faker": "^4.1.0",
"fs-extra": "^4.0.0",
"http-errors": "^1.6.1",
"json-parser": "^1.1.5",
"jsonwebtoken": "^7.4.1",
"mongoose": "^4.11.4",
"morgan": "^1.8.2",
"multer": "^1.3.0",
"nodemon": "^1.11.0",
"ramda": "^0.24.1",
"webpack": "^3.4.1"