








module.exports= (sequelize,Sequelize) =>{
 const Payment = sequelize.define('payment', {
    card_no:{ 
         type: Sequelize.INTEGER,
         allowNull: false,
         },
     name:{
         type:Sequelize.STRING,
         allowNull: false,
         required:true
     },
     cvv:{
         type:Sequelize.INTEGER,
         allowNull: false,
         required:true
     },
    //  email:{
    //      type:Sequelize.STRING,
    //      references:{
    //          model:'users',
    //          key:'email',
    //          allowNull:false
    //      }
    //     },

        email_id:{
            type:Sequelize.STRING,
            references:{
                model:'users',
                key:'email',
                allowNull:false
            }
           
    }
 }, {
     // options
   });

   return Payment;
}

