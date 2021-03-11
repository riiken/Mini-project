const express = require('express');

const db = require('../config/db');

const Biomodel= db.storeNWDB;

const router = express.Router();

// router.get('/',(req,res)=>{

//     res.send('user route connection established ')

// });





// method :GET
// DESC: This api will get all the users
// api : http://localhost:3000/api/user/


router.get('/',(req,res)=>{

    Biomodel.User.findAll()
    .then((userdata)=>{

        res.send({
            data:userdata,
            status:200
        })
    })
    .catch((err)=>{
        res.send({
            data:{message:"some error while sending"},
            err:err,
            status:500
        })
    })
})
    module.exports=router;