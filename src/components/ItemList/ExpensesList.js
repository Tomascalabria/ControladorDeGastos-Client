import { Flex,TableContainer,Table,Thead,Th,Tr, useColorModeValue, color} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState, useContext, useEffect} from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Expense } from './Expense'
import {Dashboard} from '../Dashboard/Dashboard.js'
import { ExpensesContext } from '../../Context/ExpensesContext/ExpensesContext'
export const ExpensesList = () => {
    const {expenses,setExpenses}=useContext(ExpensesContext)
    const {user}=useContext(AuthContext)

    
  const getItems=async ()=>{
    try{
  // Right now we are receiving all the expenses and filtering by the username but we should only receive the one from the username --> that will be modified
      const data =await axios.get('https://controladorgastosapi.herokuapp.com/expenses/',{headers:{
        username:user.userInfo.username
      }})
      const result=data.data
      setExpenses(result)
      console.log(expenses)
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



  <Flex background={useColorModeValue('transparent','gray.800')}

  flexWrap={'wrap'}
  flexDirection={'row'}
  alignContent='space-around'
    gap={'10px'}
    marginTop='50px'
    justifyContent={'center'}
 
  >
    <TableContainer >  
    <Table size='lg' variant={'simple'} background={useColorModeValue('transparent','gray.800')}  > 
    <Thead>
    <Tr >
    <Th color={useColorModeValue('blackAlpha.800','blue.400')}>Titulo</Th>
    <Th color={useColorModeValue('blackAlpha.800','blue.400')}>Monto</Th>
    <Th color={useColorModeValue('blackAlpha.800','blue.400')}>Categoria</Th>
    <Th color={useColorModeValue('blackAlpha.800','blue.400')}>Tipo</Th>
    
    
    </Tr>
    </Thead>
      {expenses.map((expense)=><Expense props={{expense,setExpenses,getItems}}  {...expense} key={expense._id} />)}
        
    </Table>
    </TableContainer>


    </Flex>
    <Dashboard props={[expenses]} />
</>

    )
}
