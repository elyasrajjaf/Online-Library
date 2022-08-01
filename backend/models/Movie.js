const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    cover: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        trim: true
    },
    publishedDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Movie', MoviesSchema)