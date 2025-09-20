const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
},{timestamps:true});

module.exports = mongoose.model("book",bookSchema);