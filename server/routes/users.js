var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
const cors=require('cors');

router.use(bodyParser.json());


/* GET users listing. */

router.post('/login', (req, res) => {
  const username=req.body.username;
  const password=req.bosy.password;
  User.findOne({username:req.body.username}, (err, user) => {
    if(user){
      if(password === user.password){
        res.send({message:"User logged in!", name: user.name, username: user.username})
      }
      else{
        res.send({message:"Incorrect Passowrd!"});
      }
    }
    else{
      res.send({message:"User not registerd!"});
    }
  })
})

router.post('/signup',(req, res) => {
  const name=req.body.name;
  const username=req.body.username;
  const password=req.body.password;
  console.log(req.body)
  User.findOne({username: req.body.username}, (err, user) => {
    if(user)
    {
      res.send({message:"User already registeres!"});
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
          res.send(err)
        }
        else
        {
          res.send({message:"Successfully Registered", name:user.name, username:user.username});
        }
      })
    }
  })
});





module.exports = router;
