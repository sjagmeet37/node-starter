const router = require("express").Router();
const userController = require("../controller/userController.js")

router.get('/data', userController.data);
router.post("/signup", userController.signUp)
router.post("/login", userController.login)
router.patch("/:userId", userController.patch)
router.delete("/:userId", userController.delete)


module.exports = router;