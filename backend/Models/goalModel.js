const { text } = require('body-parser');
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [false, 'please add a text value']
    }
}, {
    timeStamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)
