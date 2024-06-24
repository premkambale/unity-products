const { productCollection } = require('../../Models');
const { productService } = require('../../Services');

// -------------------------------------------------------------------------------to create product--------------------------------------------------------------------

const create_product = async (req, res) => {
  const body = req.files;
  console.log("==================================================")
  console.log({ body })
  console.log("==================================================")

  const productImages = req.files.product_image;
  const productDoc = req.files.product_doc;
  debugger;
  let payload;

  if (req.files) {
    const productImagePaths = productImages.map(file => file.path)
    const doc = productDoc[0].path;

    payload = { ...req.body, product_image: productImagePaths, product_doc: doc };
  }
  else {
    payload = { ...req.body };
  }
  console.log({ body })
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

// -------------------------------------------------------------------------------To Get All Product--------------------------------------------------------------------
const get_all_products = async (req, res) => {
  try {
    const products = await productService.fetch_all_products(req);
    console.log({ products })
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

// -------------------------------------------------------------------------------To Get Product By Id--------------------------------------------------------------------
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

// -------------------------------------------------------------------------------To Delete All Products --------------------------------------------------------------------
const delete_all_products = async (req, res) => {
  try {
    const products = await productService.delete_all_products(req);
    if (products) {
      res.send({ success: true, data: products });
    }
    else {
      res.send({ success: false, message: "failed to delete products" })
    }
  } catch (error) {
    res.send({ success: false, message: "failed to delete products" })
  }
}

// -------------------------------------------------------------------------------To Delete Product By Id--------------------------------------------------------------------
const delete_product_by_id = async (req, res) => {
  try {
    const product = await productService.delete_product_by_productID(req);
    if (product) {
      res.send({ success: true, message: "product deleted successfully", data: product });
    }
    else {
      res.send({ success: false, message: "failed to delete product" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to delete product" })
  }
}

// -------------------------------------------------------------------------------To Update Product By Product Id--------------------------------------------------------------------
const update_product = async (req, res) => {
  const payload = req.body;
  console.log({ payload })
  try {
    await productService.update_product_by_id(req);
    res.send({ success: true, message: "product updated successfully" })
  } catch (error) {
    res.send({ success: false, message: "failed to update product" })
  }
}


// ==========================================================================To get Product by category====================================================================
const get_product_by_category = async (req, res) => {
  try {
    const product = await productService.fetch_product_by_category(req);
    console.log('product', product)
    if (product) {
      res.send({ success: true, data: product });
    }
    else {
      res.send({ success: false, message: "failed to fetch product category" })
    }
  }
  catch (error) {
    res.send({ success: false, message: "failed to fetch product category" })
  }
}



module.exports = {
  create_product,
  get_all_products,
  get_product_by_id,
  delete_all_products,
  delete_product_by_id,
  update_product,
  get_product_by_category
}