const router = require("express").Router();
const igdbController = require("../../controllers/igdbController")

router.route("/gameSearch/:query")
    .get(igdbController.gameSearch);


    router.route("/coverSearch/:query")
    .get(igdbController.coverSearch);



module.exports = router;