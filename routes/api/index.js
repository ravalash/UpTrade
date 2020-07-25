const router = require("express").Router();


const userRoutes = require("./user");
const itemRoutes = require("./item")

// User routes
router.use("/user", userRoutes);

// Item routes
router.use("/item", itemRoutes);



module.exports = router;
