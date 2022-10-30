import { Flex,TableContainer,Table,Thead,Th,Tr} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState, useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Expense } from './Expense'
import {Dashboard} from '../Dashboard/Dashboard.js'
export const ExpensesList = () => {
    const [expenses,setExpenses]=useState([])
    const {user}=useContext(AuthContext)

    
  const getItems=async ()=>{
    try{
  // Right now we are receiving all the expenses and filtering by the username but we should only receive the one from the username --> that will be modified
      const data =await axios.get('https://controladorgastosapi.herokuapp.com/expenses/',{headers:{
        username:user.userInfo.username
      }})
      const result=data.data
      setExpenses(result)
      }
    catch(err){
      console.log(err)
    }
  }
getItems()


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
    <TableContainer >  
    <Table size='lg' variant={'simple'} colorScheme='teal'>
    <Thead>
    <Tr>
    <Th>Titulo</Th>
    <Th>Monto</Th>
    <Th>Categoria</Th>
    <Th>Tipo</Th>
    
    
    </Tr>
    </Thead>
      {expenses.map((expense)=><Expense props={{expense,setExpenses,getItems}}  {...expense} key={expense._id} />)}
        
    </Table>
    </TableContainer>


    </Flex>
    <Dashboard props={[expenses]}/>
</>

    )
}
