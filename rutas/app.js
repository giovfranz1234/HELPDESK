var express = require('express');
var router = express.Router();
var obtUsuarios= require ('../models/consulta')

//rutas
router.get('/', async (req, res, next) => {
    
        console.log('done')
        result = await obtUsuarios.getUsuarios()
        res.json(result);
        /*res.status(200).json({
            ok: true,
            mensaje: 'peticion realizada correctamente',
            
        });*/
    });
module.exports = router;