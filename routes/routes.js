const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/clinicController");

router.get("/", clinicController.renderHome);
router.get("/horarios",clinicController.renderSpecialtiesPage);


module.exports = router;