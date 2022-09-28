import { Flex,TableContainer,Table,Thead,Th,Tr} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Expense } from './Expense'

export const ExpensesList = () => {
    const [expenses,setExpenses]=useState([])
const getItems=async ()=>{
  try{

    const data =await axios.get('expenses/')
    const parsedData=await data.data
    //in this case it is not necesary to parse data as API is sending response as JSON.
    setExpenses(parsedData)
    console.log(parsedData)
  }
  catch(err){
    console.log(err)
  }
}


useEffect(()=>{
getItems()
},[])




  return (
    <>
  <Flex
  flexWrap={'wrap'}
  flexDirection={'row'}
  alignContent='space-around'
    gap={'10px'}
    marginTop='50px'
    justifyContent={'center'}
 
  >
    <TableContainer>  
    <Table size='lg' variant={'simple'} colorScheme='teal'>
    <Thead>
    <Tr>
    <Th>Titulo</Th>
    
    <Th>Monto</Th>
    <Th>Categoria</Th>

    </Tr>
    </Thead>
      {expenses.map((expense)=><Expense {...expense} key={expense._id} />)}
    
    </Table>
    </TableContainer>


    </Flex>
</>

    )
}
