









module.exports= (sequelize,Sequelize) =>{
 const Client = sequelize.define('client', {
    client_id: {
         
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey:true,
         autoIncrement:true
     },
     cl_email:{
         type:Sequelize.STRING,
         primaryKey:true
     },

     region:{
         type:Sequelize.STRING,
         allowNull: false,
         required:true
     },
     month:{
         type: Sequelize.STRING,
         allowNull: false,
         required:true
     },

      sales_cost :{
         type:Sequelize.INTEGER,
         allowNull: false,
         required:true
     }
 }, {
   });

   return Client;
}

