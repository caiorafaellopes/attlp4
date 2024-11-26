const express = require('express');
const aplicativo = express();
aplicativo.use(express.json());
const cRota = require('./routes/Clientes');
const vRota = require('./routes/Veiculos');
aplicativo.use('/clientes', cRota);
aplicativo.use('/veiculos', vRota);
const PORT = 8080;
aplicativo.listen(PORT, () => {
    console.log(`Servidor roda em http://127.0.0.1:${PORT}/`);
});
