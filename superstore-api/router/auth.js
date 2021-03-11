const express = require('express');

const db = require('../config/db');
const UserModel = db.storeNWDB.User;

const router = express.Router();

router.get('/',(req,res)=>{

    res.send('auth route connection established ')

})

// method: post
// desc:this api will add signup details to database
// api : http://localhost:3000/api/auth/signup

router.post('/signup',(req,res)=>{

    // 1.we should collect data from request
    let reqname = req.body.name;
    let reqemail = req.body.email;
    let reqpass = req.body.password;
    let reqtype = req.body.type;



    // 2.pass store data to database

    UserModel.create({

        name : reqname,
        email :reqemail,
        password : reqpass,
        type : reqtype

    }).then((data)=>{

        
    // 3.if data is added inform to client
        res.send({

            message : "user added successfuly",
            status : 200
        })
    })

    .catch((err)=>{

         // 4.if data is not added inform to client
        res.send({

            message:"user not added",
            status : 500
        })
    })

})



    //@Method: POST
//Desc: This is api will check credentials and respond to ui
//API Name: http://localhost:3000/api/auth/signin

router.post('/signin',(req,res)=>{
    const reqemail = req.body.email;
    const reqpassword = req.body.password;

    UserModel.findOne({where:{

            email:reqemail,
            password:reqpassword
    },raw: true})
    .then((ordersdata)=>{
       
        if(ordersdata)
        {

            res.send({
                message: "user signin successful",
                status: 200,
                email:ordersdata.email
              
            })
        }
        else{
            res.send({
                message: "Invalid email-id or password!",
                status: 404
            })
        }
    })
    .catch((err)=>{
        res.send({
            message: "Invalid email-id",
            status: 500,
            err:err
        })
    })
})




module.exports=router;