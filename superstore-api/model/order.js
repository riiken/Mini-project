






module.exports= (sequelize,Sequelize) =>{
 const Order = sequelize.define('order', {
      order_id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey:true,
         autoIncrement:true
     },
      date:{
        type:Sequelize.DATE,
         allowNull: false,
         required:true
     },
      type:{
        type:Sequelize.STRING,
        required:true,
        allowNull: false
     },
      type_2:{
        type:Sequelize.STRING,
        required:true,
        allowNull: false
    },
    type_3:{
        type:Sequelize.STRING,
        required:true,
        allowNull: false
    }  
    }, {
     // options
   });

   return Order;
}

