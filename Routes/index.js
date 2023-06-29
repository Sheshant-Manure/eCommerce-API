const express = require('express');
const Router = express.Router();
const productsController = require('../Controllers/products_controller');

Router.get('/', (req, res)=>{
    return res.send('Welcome to eCommerce API')
});

// API request to add product to the database
Router.post('/products/create', productsController.createProduct);

// API request to list all the products
Router.get('/products', productsController.listProducts);

// API request to delete a product using productid
Router.delete('/products/:productId', productsController.deleteProduct);

// API request to update quantity of a product
Router.post('/products/:id/update_quantity/:qty', productsController.updateProductQty);

module.exports = Router;