const router = require("express").Router();
<<<<<<< Updated upstream



=======
const userRoutes = require("./user");
const testRoutes = require("./test");
// User routes
router.use("/user", userRoutes);

//Test Routes
router.use("/test", testRoutes)

>>>>>>> Stashed changes
module.exports = router;
