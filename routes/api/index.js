const router = require("express").Router();

const userRoutes = require("./user");
const testRoutes = require("./test");

// User routes
router.use("/user", userRoutes);

//Test Routes
router.use("/test", testRoutes)



module.exports = router;
