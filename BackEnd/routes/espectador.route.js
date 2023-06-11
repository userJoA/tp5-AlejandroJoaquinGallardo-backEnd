const espectadorCrtl= require("./../controllers/espectador.controller");

const express = require("express");

const router = express.Router();

router.get('/',espectadorCrtl.getEspectadores);
router.post('/',espectadorCrtl.createEspectador);
router.get('/',espectadorCrtl.getEspectador);

module.exports = router;