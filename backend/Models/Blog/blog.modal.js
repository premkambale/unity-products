const mongoose = require('mongoose');

const blogCollection = mongoose.Schema({
  blog_name: {
    type: String,
    require: true
  },
  blog_Summary:{
    type:String,
    require:true
  },
  blog_description: {
    type: String,
    require: true
  },
  blog_image: [{
    type: String,
    require: true
  }],
  create_date: {
    type: Date,
    default: Date.now(),
    require: true
  }
}, {
  timeStamps: true
})
module.exports = mongoose.model("blogs", blogCollection);

