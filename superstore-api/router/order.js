const express = require('express');

const db = require('../config/db');
const Ordermodel = db.storeNWDB;

const router = express.Router();


// method: post
// desc: this api will add orders to db
// api:http://localhost:3000/api/order/addorder

router.post('/addorder',(req,res)=>{



// let reqorderid =req.body.order_id;
let reqdate = req.body.date;
let reqtype = req.body.type;
let reqlike = req.body.type_2;
let reqt=req.body.type_3;
// let reqamount= req.body.amount;
// let reqpayment = req.body.payment;


Ordermodel.Order.create({


    // order_id:reqorderid,
    date : reqdate,
    type : reqtype,
    type_2:reqlike,
    type_3:reqt
    // amount:reqamount
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
// desc: this will show orders
// // api::http://localhost:3000/api/order/

router.get('/',(req,res)=>{

    Ordermodel.Order.findAll()
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


module.exports = router;