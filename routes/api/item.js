const router = require("express").Router();
const itemController = require("../../controllers/itemController");
const db = require("../../models");

//matches api/item/byid/:id
router.route("/byid/:id")
.get(itemController.findOneById);

//matches api/item/
router.route("/")
    .get(itemController.findAllById)
    .post(itemController.create)
    .delete(itemController.remove)
    .put(itemController.update)



module.exports = router;
