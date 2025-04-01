// routes/hotelRouter.js

const express = require('express');
const router = express.Router();
const Hotel = require('../modules/hotelModule');  // เชื่อมโยงกับโมเดลของโรงแรม

router.get('/home', async (req, res) => {
    try {
        // ดึงข้อมูลโรงแรมทั้งหมดจากฐานข้อมูล
        const hotels = await Hotel.find().limit(4); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
        res.render('home', { hotels: hotels });  // ส่งข้อมูลไปยังหน้า EJS
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving hotels data');
    }
});

module.exports = router;
