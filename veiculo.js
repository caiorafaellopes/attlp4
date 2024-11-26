const express = require('express');
const rota = express.Router();
let veiculo = [];
rota.get('/', (req, res) => {
    res.json(veiculo);
});
rota.post('/', (req, res) => {
    const veiculo = req.body;
    veiculo.push(veiculo);
    res.status(201).json({ message: 'Veículo incluido!', veiculo });
});
rota.put('/:id', (req, res) => {
    const { id } = req.params;
    const vAtualizaddo = req.body;
    veiculo = veiculo.map(v => (v.id === id ? vAtualizaddo : v));
    res.json({ message: 'Veículo atualizado!', vAtualizaddo: vAtualizaddo });
});
rota.delete('/:id', (req, res) => {
    const { id } = req.params;
    veiculo = veiculo.filter(v => v.id !== id);
    res.json({ message: 'Veículo Excluido!' });
});
module.exports = rota;