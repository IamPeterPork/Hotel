const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  imageLink: {                  // link รูปภาพ
    type: String,
    required: true
  },
  name: {                       // ชื่อโรงแรม
    type: String,
    required: true
  },
  price: {                      // ราคา
    type: Number,
    required: true
  },
  address: {                    // ที่อยู่
    type: String,
    required: true
  },
  details: {                    // รายละเอียด
    type: String,
    required: true
  },
  rating: {                     // คะแนนรีวิว
    type: Number,
    required: true
  },
  rooms: [{                     // ประเภทห้องที่มีในโรงแรม
    type: { type: String, required: true },  // ชื่อประเภทห้อง เช่น Standard, Deluxe, Suite
    priceP: { type: Number, required: true }  // ราคาต่อคืน
  }]
  
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
