const express = require("express");

const {addTree,getAllTree,resetTree} = require("../controllers/tree.controller");

const router = express.Router();

router.post("/trees", addTree);

router.get("/trees", getAllTree);

router.delete("/trees/reset", resetTree);

module.exports = router;