const Espectador = require("../models/espectador");
const espectadorCrtl={};

espectadorCrtl.getEspectadores= async (req, res) => {
    var espectadores= await Espectador.find();
    res.json(espectadores);
};

espectadorCrtl.getEspectador= async (req, res) => {
    const espectador= await Espectador.findById(req.params.id);
    res.json(espectador);
};

espectadorCrtl.createEspectador= async (req, res) => {
    var espectador= new Espectador(req.body);
    try {
        await espectador.save();
        res.json(
            {
                status: "1",
                msg: "Espectador guardado.",
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando operacion.",
        });
    }
};

module.exports = espectadorCrtl;