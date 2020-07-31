const path = require("path");
const router = require("express").Router();
const passport = require("../config/passport");
const apiRoutes = require("./api");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api",isAuthenticated, apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
