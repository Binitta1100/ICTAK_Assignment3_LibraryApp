const express = require('express');
const BookData = require('./src/model/Bookdata');
const UserData = require('./src/model/Userdata');
const AuthorData = require('./src/model/Authordata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
email="admin@gmail.com";
pwd="admin123";

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token == 'null'){
        return res.status(401).send('Unauthorized request');
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send('Unauthorized request');
      }
      req.userId = payload.subject;
      next();
}

app.post('/newuser', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var user = {
        username : req.body.user.username,
        email : req.body.user.email,
        pwd : req.body.user.pwd
    }
    var user = new UserData(user);
    user.save();
});

app.post('/login', function(req,res){
    let userData = req.body;
    UserData.findOne({email: userData.email})
    .then(function(user){
        if(user.pwd == userData.pwd){
            let payload = {subject:email+pwd};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
        else{
            res.status(401).send('Invalid Password');
        }
    })
    .catch(function(){
        res.status(401).send('Invalid Email');
    }) 
});

app.get('/books', verifyToken, function(req,res){
    BookData.find()
    .then(function(books){
        res.send(books);
    });
});

app.post('/addbook', verifyToken, function(req,res){
    console.log(req.body);
    var book = {
        btitle : req.body.book.btitle,
        author : req.body.book.author,
        genre : req.body.book.genre,
        img : req.body.book.img
    }
    var book = new BookData(book);
    book.save();
});

app.put('/editbook', (req,res)=>{
    console.log(req.body)
    id=req.body._id,
    btitle = req.body.btitle,
    author = req.body.author,
    genre = req.body.genre,
    img = req.body.img
    BookData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "btitle":btitle,
                                "author":author,
                                "genre":genre,
                                "img":img}})
   .then(function(){
       res.send();
   })
});

app.delete('/deletebook/:id', function(req,res){
    const id = req.params.id;
    BookData.remove({_id: id})
    .then(function(){
        res.status(200).json({id});
    })
});

app.get('/authors', verifyToken, function(req,res){
    AuthorData.find()
    .then(function(authors){
        res.send(authors);
    });
});

app.post('/addauthor', verifyToken, function(req,res){
    console.log(req.body);
    var author = {
        aname : req.body.author.aname,
        nationality : req.body.author.nationality,
        fambook : req.body.author.fambook,
        img : req.body.author.img
    }
    var author = new AuthorData(author);
    author.save();
});

app.put('/editauthor', (req,res)=>{
    console.log(req.body)
    id=req.body._id,
    aname = req.body.aname,
    nationality = req.body.nationality,
    fambook = req.body.fambook,
    img = req.body.img
    AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "aname":aname,
                                "nationality":nationality,
                                "fambook":fambook,
                                "img":img}})
   .then(function(){
       res.send();
   })
});

app.delete('/deleteauthor/:id', function(req,res){
    const id = req.params.id;
    AuthorData.remove({_id: id})
    .then(function(){
        res.status(200).json({id});
    })
});

app.get('/getuser/:email', function(req, res){
    const email = req.params.email;
    UserData.findOne({"email":email})
    .then((user)=>{
          res.send(user);
      });
  });

app.get('/book/:id', function(req, res){
    const id = req.params.id;
    BookData.findOne({"_id":id})
    .then((book)=>{
          res.send(book);
      });
  });

app.get('/author/:id', function(req, res){
    const id = req.params.id;
    AuthorData.findOne({"_id":id})
    .then((author)=>{
          res.send(author);
      });
  });

app.listen(3000, function(){
    console.log('Listening to port 3000');
});