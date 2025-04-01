const express = require('express');
const router = express.Router();
const User = require('../modules/registerModule');

router.get('/login',(req ,res) => {
    res.render('login.ejs');
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบ" });
    }
    console.log(email)
    try {
        // ค้นหาผู้ใช้จากฐานข้อมูล
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
        }

        res.status(200).json({ message: "เข้าสู่ระบบสำเร็จ" });
    } catch (error) {
        res.status(500).json({ error: "เกิดข้อผิดพลาด" });
    }
});

module.exports = router;