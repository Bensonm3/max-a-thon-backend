const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
}, {
    collection: 'posts'
  })

module.exports = mongoose.model('Post', postSchema)