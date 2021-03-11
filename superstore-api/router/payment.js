const express = require('express');

const db = require('../config/db');
const Paymentmodel = db.storeNWDB;

const router = express.Router();


// method: post
// desc: this api will add payment to db
// api:http://localhost:3000/api/payment/pay

router.post('/pay',(req,res)=>{



// let reqorderid =req.body.order_id;
let reqcardno = req.body.card_no;
let reqname = req.body.name;
let reqcvv = req.body.cvv;
let reqemail_id =req.body.email_id;
// let reqamount = req.body.amount;


Paymentmodel.Payment.create({


    // order_id:reqorderid,
    card_no:reqcardno,
    name:reqname,
    cvv:reqcvv,
    email_id:reqemail_id
    // amount:reqamount
}).then((data)=>{

    res.send({
        data:{message:"payment successfull"},
        status :200
    })
})

.catch((err)=>{
   
    res.send({

        data:{message:"payment unsuccess"},
        status:500,
        err:err
    })
})

})

// method:get
// desc: this will show orders
// // api::http://localhost:3000/api/payment/

router.get('/',(req,res)=>{

    Paymentmodel.Payment.findAll()
    .then((orderdata)=>{

        res.send({
            data:orderdata,
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