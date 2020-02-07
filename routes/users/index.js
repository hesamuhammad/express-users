const express = require('express')
const router = express.Router();
const { upload } = require("../../config")

const { getAll, getById, getByEmail, updateByEmail, deleteByEmail } = require("./controller")

router.get("/", getAll);
router.get("/id/:id", getById)
router.get("/email/:email", getByEmail)
router.put("/email/:email", updateByEmail)
router.delete("/email/:email", deleteByEmail)
// router.get("/email/:email", require("./controller").getByEmail)

router.post("/", upload.single("avatar"), require("./controller").postData)


module.exports = router;