const express = require('express');
const rot = express.Router();
let cliente = [];
rot.get('/', (req, res) => {
    res.json(cliente);
});
rot.post('/', (req, res) => {
    const cliente = req.body;
    cliente.push(cliente);
    res.status(201).json({ message: 'Cliente Incluido!', cliente });
});
rot.put('/:id', (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;
    cliente = cliente.map(c => (c.id === id ? clienteAtualizado : c));
    res.json({ message: 'Cliente atualizado!', clienteAtualizado });
});
rot.delete('/:id', (req, res) => {
    const { id } = req.params;
    cliente = cliente.filter(c => c.id !== id);
    res.json({ message: 'Cliente excluido!' });
});
module.exports = rot;