const express = require('express');
const server = express();

server.use(express.json());

prodId = 2;
const prod = [{
    prodId: "0",
    prodNome: "Elma Chips Batatinha",
    prodUnidade: "1",
    prodValorUnit: "R$ 10,00"
},
{
    prodId: "1",
    prodNome: "Doritos",
    prodUnidade: "1",
    prodValorUnit: "R$ 20,00"
},
{
    prodId: "2",
    prodNome: "Cheetos",
    prodUnidade: "1",
    prodValorUnit: "R$ 30,00"
}];


//retorna um exemplo
server.get('/produtos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(prod[index]);
});

//retorna todos os exemplos
server.get('/produtos', (req, res) => {
    return res.json(prod);
});

//cria um exemplo
server.post('/produtos', (req, res) => {
    prodId++;
    const { prodNome } = req.body;
    const { prodUnidade } = req.body;
    const { prodValorUnit } = req.body;

    prod[prodId] = { prodId, prodNome, prodUnidade, prodValorUnit };

    return res.json(prod[prodId]);
});

// atualizar um exemplo
server.put('/produtos/:index', (req, res) => {
    const { index } = req.params;
    const { prodId } = req.body;
    const { prodNome } = req.body;
    const { prodUnidade } = req.body;
    const { prodValorUnit } = req.body;

    prod[index] = { prodId, prodNome, prodUnidade, prodValorUnit };
    return res.json(prod);
});

// deletar um exemplo
server.delete('/produtos/:index', (req, res) => {
    const { index } = req.params;

    prod.splice(index, 1);
    return res.json({ messege: "O produto foi deletado" });
});

server.listen(3000, () => {
    console.log('PAI TA ON NA PORTA 3K')
});