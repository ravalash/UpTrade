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
    rating: 0
  })
    // .then((dbUser) => { res.json(dbUser) })
    .then(() => {
      console.log("user create successful");
      res.redirect(307, "/api/user/login");
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
});

// Logout GET route
router.route("/logout").get(function (req, res, next) {
  console.log('logging out')
  req.logout(function(err) {
    if (err) { return next(err); }
    res.status(200).json({message: 'logged out'});
  });

//  req.logout();
//  res.status(200).json({message: 'logged out'})
});

// User Data GET route
router.route("/").get(userController.findById)

module.exports = router;
