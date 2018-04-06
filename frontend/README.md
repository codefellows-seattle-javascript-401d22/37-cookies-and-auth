This application hooks up to a previously architected backend and creates a frontend for user authentication.

In order to run this application, first navigate to the root folder of the backend and type ```npm run start``` in your terminal. You should see two messages saying DB_UP and SERVER_UP. Leave this server running the entire time you are using the application. The application utilizes MongoDB in order to make the GET and POST requests which hold the user information.

Then, in a new window of your terminal, navigate to the root folder of your frontend. From there, type ```npm run watch```. Leave this terminal window open the entire time you would like to use your application as well. 

Your application should be ready to access! Open your browser and go to __http://localhost:8080__.

## User Authentication

Upon entering the page, you will see two navigation links which allow you to either signup or login. When you sign up, you are returned a token which is then saved to local storage. When you login, you are returned the same token.

The signup requires all three fields (email, username, and password) in order to authenticate the user. Login requires only username and password.

*** Note that the user interface does not respond to the login and sign up (YET!), but you will be able to see a response of the token created for you in the console if you open up your Chrome Dev Tools.

When you 'Sign Up', you are creating a POST request to the server at the route '/signup', and the server returns a token which is then set in the browser.

When you 'Log In', you are creating a GET request to the server at the route '/login', and the server returns a token which is then set in the browser.

## Profile Creation

Once you have signed up and logged in to the application, you are able to click on Settings, which gives you the option of creating a user profile.

The user profile takes in two values, a profile photo and a bio. Neither are required.

When you choose a photo to upload, the browser will render it on the webpage as a preview for you. 

When you create a profile, a POST request is made to the server at route '/profiles'.

Once your profile has been created, you can update the profile using a PUT request to the server at route '/profiles/{userId}'.

**Voila!**

This application utilizes the following dependencies:
- babel-core
- babel-loader
- babel-plugin-transform-object-rest-spread
- babel-preset-env
- babel-preset-react
- clean-webpack-plugin
- css-loader
- dotenv
- extract-text-webpack-plugin
- file-loader
- html-webpack-plugin
- node-sass
- react
- react-dom
- react-redux
- react-router-dom
- redux
- sass-loader
- superagent
- uglifyjs-webpack-plugin
- url-loader
- webpack
- webpack-dev-server