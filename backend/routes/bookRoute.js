const express = require("express");
const { getbookController } = require("../controller/bookController");


const router = express.Router();

router.get("/get",getbookController);
module.exports = router;