const { productCollection } = require('../../Models');
const { productService } = require('../../Services');

// -------------------------------------------------------------------------------to create product--------------------------------------------------------------------

const create_product = async (req, res) => {
  const file = req.file;
  if (file) {
    const payload = { ...req.body, product_image: req?.file?.buffer };
    const new_product = new productCollection(payload);
    try {
      await new_product.save();
      res.send({
        message: 'product created sucessfully',
        success: true,
      })
    }
    catch (error) {
      res.send({ success: false, message: "failed to create product" })
    }
  }
  else {
    res.send({ success: false, message: "failed to create product" })
  }
}

const get_all_products = async (req, res) => {
  try {
    const products = await productService.fetch_all_products(req);
    if (products) {
      res.send({ success: true, data: products });
    }
    else {
      res.send({ success: false, message: "failed to fetch products" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to fetch products" })
  }
}

const get_product_by_id = async (req, res) => {
  try {
    const product = await productService.fetch_product_by_productID(req);
    if (product) {
      res.send({ success: true, data: product });
    }
    else {
      res.send({ success: false, message: "failed to fetch product" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to fetch product" })
  }
}

module.exports = {
  create_product,
  get_all_products,
  get_product_by_id
}