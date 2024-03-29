const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    name: String,
    district: {
        type: String,
        allowNull: true
    },
    address: String,
    url: String,
    map_frame:  {
        type: String,
        allowNull: true
    },
    image: String,
    category: String
})

const Location = mongoose.model("Location", locationSchema)

module.exports = Location;