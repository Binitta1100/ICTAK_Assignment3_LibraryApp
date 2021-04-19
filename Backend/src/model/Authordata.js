const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.cnup4.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    aname : String,
    nationality : String,
    fambook : String,
    img : String
});

var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports =  Authordata;