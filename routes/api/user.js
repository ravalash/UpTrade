const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const db = require("../../models");



router.route("/login")
.post(passport.authenticate("local"),  (req, res) => {
  console.log('login requested')
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

// // // Using the passport.authenticate middleware with our local strategy.
// // // If the user has valid login credentials, send them to the members page.
// // // Otherwise the user will be sent an error
// app.post("/api/login", passport.authenticate("local"), (req, res) => {
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//         email: req.user.email,
//         id: req.user.id
//     });
// });

// // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// // otherwise send back an error
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
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// logout route
router.route("logout").get(function (req, res) {
  req.logout();
  res.redirect("/");
});

// // Route for logging user out
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
