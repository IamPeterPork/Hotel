const express = require('express');
const router = express.Router();
const Hotel = require('../modules/hotelModule');
const Review = require('../modules/commentModule');

// Define the route to handle GET request for /books/:hotelName
router.get('/books/:hotelName', async (req, res) => {
    try {
        const hotelName = req.params.hotelName; // Get the hotel name from the URL parameter

        // Fetch hotel data from DB
        const hotel = await Hotel.findOne({ name: hotelName });

        // If no hotel is found, send 404 error
        if (!hotel) {
            return res.status(404).send('Hotel not found');
        }
        console.log(hotel._id.toString());  // Log the hotelId (for debugging purposes)

        // Fetch reviews associated with the hotel using the hotel's _id
        const reviews = await Review.find({ hotelId: hotel._id.toString() }).limit(5);

        // Log reviews (for debugging purposes)
        console.log(reviews);

        // Render a page with the hotel details and reviews
        res.render('books.ejs', { hotel: hotel, reviews: reviews });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving hotel data');
    }
});


module.exports = router;
