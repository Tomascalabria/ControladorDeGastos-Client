import { Box, Stack,FormControl,Input,useBreakpointValue, Button, Flex, TableContainer, Table, TableCaption, Thead, Tbody,Tr,Td, Th, IconButton, useColorModeValue, Img} from '@chakra-ui/react'
import {AddIcon, SearchIcon} from '@chakra-ui/icons'
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { TablesTableRow } from './TablesTableRow'

export const AddFriends = () => {
const [friends,setFriends]=useState([])
const friend=useRef()
const {user}=useContext(AuthContext)
const url_friends_add='https://controladorgastosapi.herokuapp.com/friends/add'
const url_friends_get='https://controladorgastosapi.herokuapp.com/friends/${user.userInfo._id}/search'
// const url2='http://localhost:5050/friends/add'
// const url22=`http://localhost:5050/friends/${user.userInfo._id}/search`


const hadndleSubmit=async(e)=>{
  e.preventDefault()
  const request=await axios.post(url_friends_get,{search:friend.current.value.toLowerCase(),
  },{headers:{
    token:user.token,

  }})
  .then((response)=>{

    setFriends(response.data.data)
  })
console.log(e.target.value)
console.log(friends)
}
const handleClick=async (e)=>{
    e.preventDefault()
//   const newFriend= await axios.post(`${url_friends_add}`,{
//     friend:friend.current.value.toLowerCase(),
//     id:user.userInfo._id
//     },{headers:{
//         token:user.token,
//         username:user.userInfo.username    
//       }
//     })
// .then((res)=>{console.log(res.data)})
// .catch((err)=>{console.log( err.response.data.message)})

  }


    return (
      <Flex  flexWrap={'wrap'} flexDir='row' h='100%' justifyContent={'space-evenly'} alignContent='center'>
        <Box 
        w={'40%'} 
        display='flex'
        minW={'350px'}
        marginTop={'2rem'}
        alignContent={'space-evenly'}
        justifyContent='center'
      >
    


    <Stack w={'100%'}>
        <form style={{height:'45%',display:'flex',flexDirection:'column'  ,justifyContent:'center'}}>
        
        <FormControl display={'flex'}  flexDirection='row' alignContent='space-around'  justifyContent={'space-around'} alignItems={'flex-start'}  >
      
          <Input id="friends" required={true} borderRadius='25px' type="text" w={'100%'} title='Ingrese el usuario de su amigx' placeholder='Ingrese el usuario de su amigx' onChange={hadndleSubmit}  _focus={{ background:'#4a4e69',fontWeight:'semibold'}} ref={friend}  name='friends' />
          <IconButton aria-label='Search database'background={'transparent'} type='submit'  _hover={{background:'transparent'}} icon={<SearchIcon color={'aquamarine'}  marginLeft='5px'/>} />
          </FormControl>
          
         
        
          </form>
          </Stack>
        </Box>
        <Box w={'60%'} maxW='950px' h='md'  marginTop={'2rem'}>
  <Table w={'100%'} display='flex'  justifyContent='space-evenly'  variant={'simple'} background={useColorModeValue('transparent','gray.800')}>

    <Thead  w={'80%'}  color={useColorModeValue('blackAlpha.800','blue.400')} justifyContent='center' display={'flex'}>
    <Tr my=".8rem" pl="0px" color="gray.400">
      <Th pl="0px" color="gray.400">
        
      </Th>
      <Th color="gray.400">Username</Th>
      <Th color="gray.400">Email</Th>
      <Th color="gray.400">Role</Th>
      <Th></Th>
    </Tr>
  </Thead>
  <Tbody>


    {useEffect(()=>{
      console.log(friends)
 friends.map((row) => {
  console.log(row)
  
  return (
<>
<Tr>
    <Td><Img src={row.profile_image}></Img></Td>
    <Td>{row.username}</Td>
    <Td>{row.isAdmin}</Td>
    <Td>{row.email}</Td>
</Tr>

      
</>
  
  )
})
    },[friends])}
    
  
  </Tbody>
</Table>


        </Box>
        </Flex>
  )
}
