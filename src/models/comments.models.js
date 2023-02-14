const { type } = require('os')
const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Users=require('./users.models')

const Follows=db.define('follows',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    follows:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model: Users,
            key:'id'
        }
    },
    followed:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Users,
            key:'id'
        }
    }
   

})
module.exports=Follows