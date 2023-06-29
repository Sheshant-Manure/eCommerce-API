const Product = require('../Models/product_schema');

module.exports.createProduct = async (req, res) => {
  try {
    const { productid, name, quantity } = req.body;

    if (!productid || !name || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const product = await Product.create({
      productid,
      name,
      quantity,
    });

    return res.json({ data: {product: { productid, name, quantity }}});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ data: { products: products}});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findOneAndDelete({ productid: productId });
    return res.json({data : { message: 'Product deleted successfully' }});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports.updateProductQty = async (req, res) => {
  const filter = { productid: req.params.id };
  let qty = parseInt(req.params.qty);
  const prod = await Product.find({productid: req.params.id});
  qty += prod[0].quantity; // Here the product quantity is incremented or decremented based on the sign + or - number
  update = { quantity: qty};
  const updatedProd = await Product.findOneAndUpdate(filter, update, {
    new: true
  });
  res.json(updatedProd);
}