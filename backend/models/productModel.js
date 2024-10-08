const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    sellar: String,
    stock: String,
    numOfReviews: String,
    createdAT: Date
});

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;