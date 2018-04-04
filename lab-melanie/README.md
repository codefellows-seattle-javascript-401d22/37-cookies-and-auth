# ![cf](https://i.imgur.com/7v5ASc8.png) Lab 37: Cookies & Auth

## Configuration
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
1. This app uses the back-end code from a previous lab, [Lab 14: Two Resource API](https://github.com/melaniebcohen/14-two-resource-api/tree/master/melanie-lab). To start, download the files from that repository.
2. `cd` to the repository directory and run `npm i`
3. Use `npm run start` to run the app locally (make sure a local Mongo database is running). Alternatively, use the `npm run start-db` script also included in the `package.json` file.
4. Verify your server is running using a local `.env` file before launching the front-end app.

#### Front-end
1. Once your back-end is running, download the files from this repository
2. `cd` to the repository directory and run `npm i`
3. Use `npm run watch` to run the app locally with a local `.env` file.
4. Navigate to `localhost:<PORT>` to explore the app

## Application Details
* This app uses `React` and is comprised of the following components:

```
<App />
  <Provider />
    <BrowserRouter />
      <Route />
        <Dashboard />
          <ListForm />
```

## Redux
This app also uses `Redux` with the following reducers. Action creators are built for each interaction.

* `LIST_FETCH`
* `LIST_CREATE`
* `LIST_UPDATE`
* `LIST_DELETE`
