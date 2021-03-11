const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.local.database, env.local.username, env.local.password, {
    host: env.local.host,
    dialect:env.local.dialect
  });
  

let storeNWDB= {};

storeNWDB = sequelize;

storeNWDB.User= require('../model/user')(sequelize,Sequelize)

storeNWDB.Order= require('../model/order')(sequelize,Sequelize)

storeNWDB.Client = require('../model/client')(sequelize,Sequelize)

storeNWDB.Payment = require('../model/payment')(sequelize,Sequelize)

storeNWDB.Feedback = require('../model/feedback')(sequelize,Sequelize)





module.exports={
    sequelize:sequelize,
  storeNWDB:storeNWDB
    
}