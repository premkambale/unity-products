const mongoose = require('mongoose');

const productCollection = mongoose.Schema({
  product_name: {
    type: String,
    require: true
  },
  product_description: {
    type: String,
    require: true
  },
  company_name: {
    type: String,
    require: true
  },
  product_price:{
    type:Number,
    require:true
  },
  product_image: {
    type: Buffer,
    // require: true
  },
  document: {
    type: mongoose.Schema.Types.Mixed
  }
 
})
module.exports = mongoose.model("products", productCollection);