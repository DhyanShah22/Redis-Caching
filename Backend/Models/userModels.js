const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('RedUser', userSchema)