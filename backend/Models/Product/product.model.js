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
  product_quantity:{
    type:Number,
    require:true
  },
  product_image: {
    type: String,
    // require: true
  },

  document: {
    type: mongoose.Schema.Types.Mixed,
    require:false
  }
 
})
module.exports = mongoose.model("products", productCollection);