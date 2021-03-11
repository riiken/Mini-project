const express = require('express');

const db = require('../config/db');
const Feedbackmodel = db.storeNWDB;

const router = express.Router();


// method: post
// desc: this api will add orders to db
// api:http://localhost:3000/api/feedback/review

router.post('/review',(req,res)=>{



// let reqorderid =req.body.order_id;
let reqemail = req.body.email;
let reqserviceprovided = req.body.service_provided;
let reqproductquality = req.body.product_quality;
let reqmanagement= req.body.management;
// let reqpayment = req.body.payment;


Feedbackmodel.Feedback.create({


    // order_id:reqorderid,
    email:reqemail,
    service_provided :reqserviceprovided,
    product_quality: reqproductquality,
   management:reqmanagement
    // payment: reqpayment
}).then((data)=>{

    res.send({
        data:{message:"sent successfully"},
        status :200
    })
})

.catch((err)=>{
   
    res.send({

        data:{message:"some error while sending"},
        status:500,
        err:err
    })
})

})


// method:get
// desc: this will show feedback
// // api::http://localhost:3000/api/feedback/

router.get('/',(req,res)=>{

    Feedbackmodel.Feedback.findAll()
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