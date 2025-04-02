const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  discount: {
    type: String,
  },
  code: {
    type: String,
  },
  nights: {
    type: Number,
  },
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
