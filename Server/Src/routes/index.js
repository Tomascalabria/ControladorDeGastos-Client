var express = require('express');
const { role,usersInfo} = require('../../Db/Users');
const products = require('../Utils/container');
var router = express.Router();
const {authUser,userAuthRole} =require('../Middlewares/userAuthetication')
/* GET All products. */

router.get('/',(req, res)=> {
 products.getAllProducts()
 .then((data)=>{
  res.send(data)
 })


 .catch((err)=>{
  console.log(err)
 })
})

//---- Get by Categoria ----// 
router.get('/:categoria',(req,res)=>{
    products.getAllProducts()
    .then((data)=>{
        let filtereData=data.filter((item)=>{return item.category==req.params.categoria})
        res.send(filtereData)
       
    })
    .catch((err)=>{
        console.log(err)
        res.send({UnknownError:'Lo sentimos ha habido un error'})
    })
})


router.delete('/:id',(req,res)=>{
    try{ 
      products.deleteProduct((req.params.id))
      .then(data=>{res.send(data)})
}
catch(error){
    console.log(error)
}})





module.exports = router;