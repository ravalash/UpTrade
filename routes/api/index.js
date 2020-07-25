const router = require("express").Router();


const userRoutes = require("./user");
const itemRoutes = require("./item");
const listingRoutes = require("./listing")
const transactionRoutes = require("./transaction")

// User routes
router.use("/user", userRoutes);

// Item routes
router.use("/item", itemRoutes);

// Transction routes
router.use("/listing", listingRoutes);

// Listing routes
router.use("/transaction", transactionRoutes);



module.exports = router;
