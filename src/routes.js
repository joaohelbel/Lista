const express =  require('express');
const router = express.Router();

const ListaControl = require('./Controllers/ListaControl');

router.get('/lista', ListaControl.buscarTodos);

module.exports = router;
