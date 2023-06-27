const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/products_controller');

Router.get('/', (req, res)=>{
    return res.send('Welcome to eCommerce API')
});

// API request to add product to the database
Router.post('/products/create', productsController.createProduct);

module.exports = Router;