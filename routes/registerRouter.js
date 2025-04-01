const express = require('express');
const User = require('../modules/registerModule');

const router = express.Router();

router.get('/register', async (req, res) => {
    res.render("register.ejs");
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    if (!email || !password) {
        return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบ" });
    }

    try {
        // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "อีเมลนี้ถูกใช้งานแล้ว" });
        }

        // บันทึกข้อมูลโดยไม่เข้ารหัสรหัสผ่าน
        const newUser = new User({ email, password });
        await newUser.save();
        
        res.status(201).json({ message: "ลงทะเบียนสำเร็จ" });
    } catch (error) {
        res.status(500).json({ error: "เกิดข้อผิดพลาด" });
    }
});

module.exports = router;