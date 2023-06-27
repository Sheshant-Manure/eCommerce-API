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

    return res.send({data: { productid, name, quantity }});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
