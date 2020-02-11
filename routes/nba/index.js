const express = require("express");
const router = express.Router();

router.post("/", require("./controller").postData);

router.get("/", require("./controller").getAll);
router.get("/position/:position", require("./controller").getByPosition)
router.get("/id/:id", require("./controller").getByUserId)

router.put("/id/:id", require("./controller").updateById)
router.delete("/id/:id", require("./controller").deleteById)

module.exports = router;