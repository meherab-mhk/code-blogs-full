
const mongoose = require('mongoose');
require('./User');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    collection: 'blog'
}
)

const blogModel = mongoose.model('blog', BlogSchema);
module.exports = blogModel;