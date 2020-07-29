const router = require("express").Router();

const userRoutes = require("./user");
const itemRoutes = require("./item");
const listingRoutes = require("./listing")
const transactionRoutes = require("./transaction")
const igdbRoutes = require("./igdb")


// User routes
router.use("/user", userRoutes);

// Item routes
router.use("/item", itemRoutes);

// Transction routes
router.use("/listing", listingRoutes);

// Listing routes
router.use("/transaction", transactionRoutes);

// IGDB routes
router.use("/igdb", igdbRoutes)





module.exports = router;
