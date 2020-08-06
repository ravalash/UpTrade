const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");

//matches api/transaction/byid/:id. Returns transaction by transaction id.
router.route("/byid/:id").get(transactionController.findOneById);

//matches api/transaction/
router
  .route("/")
  .get(transactionController.findAllById)
  .post(transactionController.create)
  .delete(transactionController.remove)
  .put(transactionController.updateBuyer);

//matches api/transactions/item/:id. find by item id
router.route("/item/:id").get(transactionController.findByItemId);

//matches api/transactions/bids finds active offers where user has made a bid
router.route("/bids").get(transactionController.findActiveBids);

//matches api/transactions/listing/:id. find by listing id
router.route("/listing/:id").get(transactionController.findByListingId);

//matches api/transaction/seller.
router.route("/seller").put(transactionController.updateSeller);

module.exports = router;
