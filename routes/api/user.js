// Imports:
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const db = require("../../models");

// ROUTES:

// Login POST route:
router.route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log('login requested');
    // Sending back a password, even a hashed password, isn't a good idea
    res.json(req.user);

  });

// Register POST route
router.route("/register").post(function (req, res) {
  console.log("user create requested");
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    verified: false,
    rating: 0,
    id: 1
  })
    // .then((dbUser) => { res.json(dbUser) })
    .then(() => {
      res.redirect(307, "/api/user/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Logout GET route
router.route("logout").get(function (req, res) {
  req.logout();
  res.redirect("/");
});

// User Data GET route
router.route("data").get(function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
