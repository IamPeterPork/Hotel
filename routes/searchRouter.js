const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
    res.render("search.ejs")
})

module.exports = router;
