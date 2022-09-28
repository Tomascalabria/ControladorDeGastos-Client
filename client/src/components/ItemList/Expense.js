import  React from 'react' 
import {Tr,Td,Tbody} from '@chakra-ui/react'

 export const Expense= ({title,description,image,amount,category,_id })=> {
  
   const deleteItem=()=>{  
     console.log(_id)
   }
 return( 
  <>

 <Tbody>
 <Tr color={'blackAlpha.800'}>
   <Td>{title}</Td>
   <Td>${amount}</Td>
   <Td>{category}</Td>
   <Td onClick={deleteItem}>x</Td>
    
   </Tr>
 
</Tbody>
</>
 )}