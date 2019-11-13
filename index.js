const express = require('express');
const { createMintAccountTx, mintTx, exchangeTx } = require('./app');
const app = express();

app.get('/createAccount', (req, res) => {


    let sig = createMintAccountTx();
    res.json({
        message: sig
    })
})

app.get('/mintCoins', (req, res) => {

    let { amount } = req.query;
    let sig = mintTx(amount);
    res.json({
        message: sig
    })
})

app.get('/mintCoins', (req, res) => {
    let { amount, address } = req.query;
    let sig = exchangeTx(amount,address);
    res.json({
        message: sig
    })
})

app.listen(3000, () => {
    console.log("lisitne")
})