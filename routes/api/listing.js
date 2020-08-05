const router = require("express").Router();
const listingController = require("../../controllers/listingController");

//matches api/listing/byid/:id
router.route("/byid/:id").get(listingController.findOneById);

//matches api/listing/info/:id
router.route("/info/:id").get(listingController.findInfoById);

//matches api/listing/
router
  .route("/")
  .get(listingController.findAll)
  .post(listingController.create)
  .delete(listingController.remove)
  .put(listingController.update);

//matches api/listing/user
router.route("/user").get(listingController.findAllById);

module.exports = router;
