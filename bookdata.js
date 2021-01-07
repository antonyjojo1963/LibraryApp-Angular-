const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict-fsd.2srr8.mongodb.net/BookDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookAuthor : String,
    description : String,
    Rating : Number,
    imageUrl : String
});

var bookdata = mongoose.model('book',NewBookSchema);

module.exports = bookdata;