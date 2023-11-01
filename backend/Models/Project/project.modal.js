const mongoose = require('mongoose');

const projectCollection = mongoose.Schema({
  project_name: {
    type: String,
    require: true
  },
  project_description: {
    type: String,
    require: true
  },

  project_image: {
    type: Buffer,
    require: false
  },
  create_date: {
    type: Date,
    default: Date.now(),
    require: true
  }
}, {
  timeStamps: true
})
module.exports = mongoose.model("projects", projectCollection);

