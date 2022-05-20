const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
    }
})

module.exports = mongoose.model("posts", postSchema);