import  React, { useContext, useEffect, useState } from 'react' 
import {Tr,Td,Tbody, useColorModeValue} from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'


export const Expense= ({title,type,amount,category,_id })=> {
const {user}=useContext(AuthContext)  
const [expenses,setExpenses]=useState
  const deleteItem= ()=>{   

    axios.delete(`/expenses/delete/${_id}`,{headers:{
      username:user.userInfo.username,
      admin:user.userInfo.isAdmin
    }})
    .then((res)=>{setExpenses(res.data)})
    .catch((err)=>{console.log(err)})
   }  

useEffect(() => {
  deleteItem
  },[expenses])

 return( 
  <>

 <Tbody>
 <Tr color={'blackAlpha.800'}>
   <Td>{title}</Td>
   <Td>${amount}</Td>
   <Td>{category}</Td>
   <Td>{type}</Td>
   <Td style={{cursor:'pointer', }} fontWeight='extrabold' color={useColorModeValue('red.500', 'red.300')} onClick={deleteItem}>x</Td>
    
   </Tr>
 
</Tbody>
</>
 )}