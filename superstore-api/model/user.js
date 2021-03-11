





module.exports= (sequelize,Sequelize) =>{
 const User = sequelize.define('user', {
 

     name: {
         
         type: Sequelize.STRING(100),
         allowNull: false
     },
 
     email:{
         type:Sequelize.STRING,
         primaryKey : true
     },
 
     password:{
         type: Sequelize.STRING,
         allowNull: false
     },

     type :{
         type:Sequelize.STRING,
         allowNull: false
     }
 
 }, {
     // options
   });

   return User;
}

