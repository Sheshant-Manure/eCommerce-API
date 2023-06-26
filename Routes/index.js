const express = require('express');
const Router = express.Router();

Router.get('/', (req, res)=>{
    return res.send('Welcome to eCommerce API')
});

module.exports = Router