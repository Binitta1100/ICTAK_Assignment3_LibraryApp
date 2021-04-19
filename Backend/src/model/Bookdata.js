const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.cnup4.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    btitle : String,
    author : String,
    genre : String,
    img : String
});

var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports =  Bookdata;