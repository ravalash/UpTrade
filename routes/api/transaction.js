const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");

//matches api/transaction/byid/:id. Returns transaction by transaction id.
router.route("/byid/:id")
.get(transactionController.findOneById);

//matches api/transaction/
router.route("/")
    .get(transactionController.findAllById)
    .post(transactionController.create)
    .delete(transactionController.remove)
    .put(transactionController.update)

 //matches api/transactions/item/:id. find by item id   
router.route("/item/:id")
    .get(transactionController.findByItemId)

 //matches api/transactions/listing/:id. find by listing id   
router.route("/listing/:id")
    .get(transactionController.findByListingId)


module.exports = router;
