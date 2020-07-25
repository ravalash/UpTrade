const router = require("express").Router();
const listingController = require("../../controllers/listingController");

//matches api/listing/byid/:id
router.route("/byid/:id")
.get(listingController.findOneById);

//matches api/listing/
router.route("/")
    .get(listingController.findAllById)
    .post(listingController.create)
    .delete(listingController.remove)
    .put(listingController.update)


module.exports = router;
