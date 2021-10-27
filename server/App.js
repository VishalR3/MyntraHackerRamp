var express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://saumya:IxQAbMDG8SKptP7x@cluster0.7howf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const User=require('./models/user')

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
        res.json({err: err});
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

app.listen(3001, ()=>{
    console.log("Server listening at port: 3001")
})

module.exports = app;