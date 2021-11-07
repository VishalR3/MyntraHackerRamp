var express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://saumya:IxQAbMDG8SKptP7x@cluster0.7howf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const User=require('./models/user')
const Transaction=require('./models/transaction');
const { VariantAlsoNegotiates } = require('http-errors');

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(mongoPath, options, (err) => {
  if (err) console.log(err);
  else console.log("Connected to MongoDB")
});

app.post('/signup', (req, res) => {
  
  const userData=JSON.parse(Object.keys(req.body)[0]);
  const name=userData["name"];
  const username=userData["username"];
  const password=userData["password"];
  User.findOne({username: userData.username}, (err, user) => {
    if(user)
    {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.json({message: "This email already exists!"});
    }
    else{
      const user = new User({
        username:username,
        name:name,
        password:password
      })
      user.save(err => {
        if(err)
        {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({err: err});
        }
        else
        {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({
                success: true,
                message: 'Registration Successful!', 
                user: user
            });
        }
      })
    }
  })
  console.log("finish")
})

app.post('/login', (req, res) => {
    const userData=JSON.parse(Object.keys(req.body)[0]);
    const username=userData["username"];
    const password=userData["password"];

    User.findOne({username:userData["username"]}, (err, user) => {
        console.log(user)
        if(user){
        if(password === user.password){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({
                success: true, 
                message: 'Logged In!', 
                user: user
            });
        }
        else{
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({message:"Incorrect Password"});
        }
        }
        else{
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({message: "User not Registered!"});
        }
    })
    console.log("finish")
})

app.post('/userData', (req, res) => {
  const username=JSON.parse(Object.keys(req.body)[0])['username'];
  User.findOne({username: username}, (err, user) => {
        if(user){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({
                success: true, 
                message: 'Passed User Data', 
                user: user
            });
        }
        else{
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.setHeader('Access-Control-Allow-Credentials', true)
            res.json({message:"User Not Found"});
        }
  })
})

app.post('/updateCoins', (req, res) => {
    console.log(req.body)
    const userData=JSON.parse(Object.keys(req.body)[0]);
    //userData=req.body;
    const username=userData["username"];
    const updatedCoins=userData["coins"];
    const description=userData["description"]
    const debit=userData["debit"];
    const credit=userData["credit"];
    const filter={username: username};
    const update={coins: updatedCoins};

    User.findOneAndUpdate (filter, update, (err, user) => {
      if(user){
            const transaction=new Transaction({
            username: username,
            credit: credit,
            debit: debit,
            balance: Number(updatedCoins),
            date: Date(),
            description: "You "+description["stat"]+" in "+description["game"]+" game"
          })
          transaction.save((err) => {
            if(err){
              User.findOneAndUpdate({username:username}, {coins: presentCoins})
              res.statusCode=500;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
              res.setHeader('Access-Control-Allow-Credentials', true)
              res.json({message: err});
            }
            else{
              res.statusCode=200;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
              res.setHeader('Access-Control-Allow-Credentials', true)
              res.json({message: "Coins Updated", user:user});
            }
          }); 
        }
    });
});

app.post('/transactions', (req, res) => {
  console.log(req.body);
  const userData=JSON.parse(Object.keys(req.body)[0]);
  //const userData=req.body;
  const username=userData['username'];
  Transaction.find({username: username}, (err, doc) =>{
    if(doc){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Allow-Credentials', true)
      res.json({
          success: true, 
          message: 'Transaction Logs successfully fetched', 
          doc: doc
            });
    }
    else{
      res.statusCode=500;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Allow-Credentials', true)
      res.json({message: err});
    }
  })
})

app.post('/updateWallet', (req, res) => {
  const userData=JSON.parse(Object.keys(req.body)[0]);
  const username=userData['username'];
  const address=userData['address'];
  User.findOneAndUpdate({username: username}, {wallet: address},(err, user) => {
    if(user){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Allow-Credentials', true)
      res.json({
          success: true, 
          message: 'Wallet Updated', 
          user: user
            });
    }
    else{
      res.statusCode=500;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Allow-Credentials', true)
      res.json({message: err});
    }
  })
})

app.listen(3001, ()=>{
    console.log("Server listening at port: 3001")
})

module.exports = app;