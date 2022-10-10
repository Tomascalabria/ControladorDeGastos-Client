import  React, { useContext } from 'react' 
import {Tr,Td,Tbody} from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'


 export const Expense= ({title,type,amount,category,_id })=> {
const {user}=useContext(AuthContext)  

  const deleteItem= ()=>{   

    axios.delete(`expenses/delete/${_id}`,{headers:{
      username:user.userInfo.username,
      admin:user.userInfo.isAdmin
    }})
    .then((res)=>{console.log(res.data)})
    .catch((err)=>{console.log(err)})
   }  


 return( 
  <>

 <Tbody>
 <Tr color={'blackAlpha.800'}>
   <Td>{title}</Td>
   <Td>${amount}</Td>
   <Td>{category}</Td>
   <Td>{type}</Td>
   <Td onClick={deleteItem}>x</Td>
    
   </Tr>
 
</Tbody>
</>
 )}