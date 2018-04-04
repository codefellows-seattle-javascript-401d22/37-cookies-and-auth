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
* **src/** - contains frontend code
* **src/index.html**
* **src/main.js** - contains entire app
* **src/components** - contains app components (see list below for all components)
* **src/actions**
* **src/reducers**
* **src/lib**
* **src/style**
* **src/style/base**
* **src/style/lib**
* **src/style/module** - contains SASS partials for all components

## Installation
#### Back-end
1. This app uses the back-end code that is forked from [Sluggram](https://github.com/slugbyte/sluggram). To start, download the files within this repository's `back-end` folder.
2. `cd` to the `back-end` folder and run `npm i`
3. Use `npm run start` to run the app locally (make sure a local Mongo database is running) on `localhost:3000`.
4. Verify your server is running using a local `.env` file before launching the front-end app.

#### Front-end
1. Once you've downloaded this repo's code, `cd` to the repository directory and run `npm i`
2. Use `npm run watch` to run the app locally with a local `.dev.env` file.
3. Navigate to `localhost:8080` to sign up for the app and subsequently sign in. More functionality to come!

## Application Details
* This app uses `React` and is comprised of the following components:

```
<App />
  <Provider />
    <BrowserRouter />
      <Route />
        <NavBar />
        <Dashboard />
          <AuthForm />
```

## Redux
This app also uses `Redux` with the following reducers. Action creators are built for each interaction.

* `TOKEN_SET`
* `TOKEN_DELETE`