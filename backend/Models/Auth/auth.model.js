const mongoose = require('mongoose');

const userRegistrationSchema = mongoose.Schema({
  fullname: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  mobileNo: {
    type: Number,
    require,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'ADMIN'
  },
}, {
  timestamps: true, // Add timestamps option here
}
)

module.exports = mongoose.model("users", userRegistrationSchema);