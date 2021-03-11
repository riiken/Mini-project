const express = require('express');

const db = require('../config/db');
const Clientmodel = db.storeNWDB;

const router = express.Router();


// method: post
// desc: this api will add clients to db
// api:http://localhost:3000/api/client/addclient

router.post('/addclient',(req,res)=>{



// let reqclientid =req.body.client_id;
let reqemail = req.body.cl_email;
let reqregion = req.body.region;
let reqmonth = req.body.month;
let reqsalescost = req.body.sales_cost;
// let reqtype = req.body.type;


Clientmodel.Client.create({


    // client_id:reqclientid,
    cl_email : reqemail,
    region:reqregion,
    month : reqmonth,
    sales_cost: reqsalescost
    // type: reqtype
}).then((data)=>{

    res.send({
        data:{message:"sent successfully"},
        status :200
    })
})

.catch((err)=>{
    console.log(err);
    res.send({

        data:{message:"some error while sending"},
        status:500,
        err:err
    })
})

})


// method: get
// desc: this will show sales report
// // api::http://localhost:3000/api/client/

router.get('/',(req,res)=>{

    Clientmodel.Client.findAll()
    .then((clientdata)=>{

        res.send({
            data:clientdata,
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
