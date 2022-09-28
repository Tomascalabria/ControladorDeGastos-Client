var express = require('express');
const { db } = require('../Models/Expenses');
const Expenses = require('../Models/Expenses');

const Expense = require('../Models/Expenses');
var router = express.Router();

/* GET All products. */
router.get('/',(req, res)=> {
    const colection= Expenses.find({}, function(err, documents) {
        res.send(documents);
      });

}
)





router.post('/create',async(req,res)=>{
    const newExpense=new Expense({
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        amount:req.body.amount
    })  
    try{
        let savedExpense= await newExpense.save()
        res.status(201).json('Gasto Creado! \n'  + savedExpense)
    }
    catch(err){
        res.status(402).json('There has been an error')
    }
})


module.exports = router;