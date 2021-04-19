const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.cnup4.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String,
    email : String,
    pwd : String
});

var Userdata = mongoose.model('userdata', UserSchema);

module.exports =  Userdata;