const express =require('express');
const User = require('../models/User');
const router = express.Router();
const user =  require('../models/User');

// Creatin a user Using : POST at "/api/auth", Who do not need auth.


router.post('/', (req,res)=>{
  res.send(req.body);
    const user = User(req.body);
    console.log(req.body);
    user.save();
})
// trying to remove mongodb error


module.exports = router;