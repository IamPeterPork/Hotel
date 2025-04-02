const mongoose = require('mongoose');

// สร้าง Schema สำหรับความคิดเห็น
const commentSchema = new mongoose.Schema({
  email: {                    // email ของผู้ใช้
    type: String,
    required: true
  },
  rating: {                   // คะแนนที่ให้
    type: Number,
    required: true
  },
  review: {                   // รีวิว
    type: String,
    required: true
  },
  date: {                     // วันที่และเวลาในการเก็บข้อมูล (จะบันทึกอัตโนมัติ)
    type: Date,
    default: Date.now        // ใช้เวลาปัจจุบันของเครื่อง
  },
  hotelId: {                  // ไอดีของโรงแรมที่รีวิว
    type: String,
    ref: 'Hotel',  
    required: true            // ต้องมี hotelId ในทุกคอมเมนต์
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
