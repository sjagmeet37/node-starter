const router = require("express").Router();

router.get('/data', (req, res) => {
    return res.status(200).send({"message" : "Ok"})
    });

module.exports = router;