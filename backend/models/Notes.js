const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    tag: {
        type: String,
        default: general

    },
    discription: {
        type: String

    },
    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('Notes', NoteSchema);