const router = require("express").Router();
const igdbController = require("../../controllers/igdbController")

router.route("/gameSearch/:query")
    .get(igdbController.gameSearch);

// router.route("/gameInfo:id")
//     .get(igdbController.gameInfo)

module.exports = router;