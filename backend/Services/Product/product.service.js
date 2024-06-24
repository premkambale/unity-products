const { productCollection } = require('../../Models');

// -----------------------------------------------------------------------------------To Get All Product -------------------------------------------------------------------------------------------------------
const fetch_all_products = async (req) => {
  return await productCollection.find();
}
// -----------------------------------------------------------------------------------To Get Product By user _id -------------------------------------------------------------------------------------------------------
const fetch_product_by_productID = async (req) => {
  return await productCollection.find({ _id: req.params.productId });
}
// -----------------------------------------------------------------------------------To Delete All Product -------------------------------------------------------------------------------------------------------
const delete_all_products = async (req) => {
  return await productCollection.deleteMany({});
}
// -----------------------------------------------------------------------------------To Delete Product By user _id -------------------------------------------------------------------------------------------------------
const delete_product_by_productID = async (req) => {
  return await productCollection.findOneAndDelete({ _id: req.params.productId });
}

// -----------------------------------------------------------------------------------To Delete Product By user _id -------------------------------------------------------------------------------------------------------
const update_product_by_id = async (req) => {
  return await productCollection.findByIdAndUpdate(req.params.productId, req.body, { new: true })
}
//------------------------------------------------------------------------------------To Get product by Category_______------------------------------------------
const fetch_product_by_category = async (req) => {
  return await productCollection.find({ product_category: `${req.params?.product_category}`})
}

module.exports = {
  fetch_all_products,
  fetch_product_by_productID,
  delete_all_products,
  delete_product_by_productID,
  update_product_by_id,
  fetch_product_by_category
}