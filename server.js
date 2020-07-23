// Imports:
require("dotenv").config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const db = require('./models');
const routes = require('./routes/api/index');

// Middleware:
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Start the API server
const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});