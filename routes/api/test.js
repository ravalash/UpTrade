const router = require("express").Router();

router.route("/").
get(function (req, res) {
  res.json({ message: "hello" });
});

module.exports = router;
