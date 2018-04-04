# User Authentication

This application hooks up to a previously architected backend and creates a frontend for user authentication.

Upon entering the page, you will see two navigation links which allow you to either signup or login. When you sign up, you are returned a token which is then saved to local storage. When you login, you are returned the same token.

The signup requires all three fields (email, username, and password) in order to authenticate the user. Login requires only username and password.

In order to run this application, first navigate to the root folder of the backend and type ```npm run start``` in your terminal. You should see two messages saying DB_UP and SERVER_UP. Leave this server running the entire time you are using the application. The application utilizes MongoDB in order to make the GET and POST requests which hold the user information.

Then, in a new window of your terminal, navigate to the root folder of your frontend. From there, type ```npm run watch```. Leave this terminal window open the entire time you would like to use your application as well. 

Your application should be ready to access! Open your browser and go to __http://localhost:8080__.

You will see two links which all you to log in and sign up. Note that the user interfase does not respond to the login and sign up (YET!), but you will be able to see a response of the token created for you in the console if you open up your Chrome Dev Tools.

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