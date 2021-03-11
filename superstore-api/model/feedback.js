






module.exports= (sequelize,Sequelize) =>{
 const Feedback = sequelize.define('feedback', {
    email:{
        type:Sequelize.STRING,
        primaryKey:true,
        required:true
    },
 
      service_provided:{
         
         type: Sequelize.STRING,
         allowNull: false,
         required:true,
         
        
     },
 
    product_quality:{
         type:Sequelize.STRING,
         allowNull: false,
         required:true
     },
 

    management:{

        type:Sequelize.STRING,
        required:true,
        allowNull: false

    }
 }, {
     
   });

   return Feedback;
}

