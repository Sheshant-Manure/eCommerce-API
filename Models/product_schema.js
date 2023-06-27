const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
    {
        productid: {
            type : Number,
            required : true,
            unique: true
        },
        name:{
            type : String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);

const Product = mongoose.model('products', ProductsSchema);
module.exports = Product;

