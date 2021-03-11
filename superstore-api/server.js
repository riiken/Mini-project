const express = require('express');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

const bodyParser = require('body-parser');
const cors = require('cors');

const port =3000;
const app =express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// bringing all the routers

const user = require('./router/user');
const order = require('./router/order');
const auth = require('./router/auth');
const client = require('./router/client');
const payment =require('./router/payment');
const feedback= require('./router/feedback');


// db connection details
const DB = require('./config//db');

DB.storeNWDB.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');

  DB.storeNWDB.sync()
  
  .then(() => {

    console.log('table creation successfull')

  })

  .catch(() =>{

    console.log('failure')
  })



})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});




// add routes to  app server
// 
//  
app.use('/api/user/',user);

// order api
app.use('/api/order/',order);

// auth api
app.use('/api/auth/',auth);

// client api
app.use('/api/client',client);

// payment api
app.use('/api/payment',payment);

// feedback api
app.use('/api/feedback',feedback);




// application server here
app.listen(port,()=>{
    console.log('server running at 3000 port')
})

