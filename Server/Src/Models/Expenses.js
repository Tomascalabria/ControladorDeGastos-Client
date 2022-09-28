const mongoose=require('mongoose')

const ExpenseSchema=new mongoose.Schema({
    title:{type:String, required:true},
    img:{type:String},
    description:{type:String},
    category:{type:Array},
    amount:{type:Number,required:true},
    users:{type:Object,default:[],required:false}
    
},
{
    timestamps:true
}
)

module.exports=mongoose.model('Expense',ExpenseSchema)