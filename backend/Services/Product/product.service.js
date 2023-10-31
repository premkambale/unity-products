const { productCollection } = require('../../Models');

const fetch_all_products = async (req) => {
  return await productCollection.find();
}
// -----------------------------------------------------------------------------------To User By user _id -------------------------------------------------------------------------------------------------------
const fetch_product_by_productID = async (req) => {
  return await productCollection.find({ _id: req.params.productId });
}
module.exports = {
  fetch_all_products,
  fetch_product_by_productID
}