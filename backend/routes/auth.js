const express =require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj = {
    a: 'this is for authentication',
    number: 234234
    } 
    res.json(obj)
})

module.exports = router;