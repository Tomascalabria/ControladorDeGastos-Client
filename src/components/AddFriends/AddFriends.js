import { Box, Stack,FormControl,Input, Flex, Table, Thead, Tbody,Tr,Td, Th, IconButton, useColorModeValue,Text, ButtonGroup} from '@chakra-ui/react'
import {AddIcon, CheckIcon, SearchIcon} from '@chakra-ui/icons'
import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export const AddFriends = () => {
const [friends,setFriends]=useState([])
const [response,setResponse]=useState([])
// const [hoveredItem,setHoveredItem]=useState(false)
const friend=useRef()
const {user}=useContext(AuthContext)
console.log(user.userInfo)
const url_friends_add='https://controladorgastosapi.herokuapp.com/friends/add'
const url_friends_get='https://controladorgastosapi.herokuapp.com/friends/${user.userInfo._id}/search'
// const local_url_friends_add='http://localhost:5050/friends/add'
// const local_url_friends_get=`http://localhost:5050/friends/${user.userInfo._id}/search`


const hadndleSubmit=async(e)=>{
  e.preventDefault()
  const request=await axios.post(url_friends_get,{search:friend.current.value.toLowerCase(),
  },{headers:{
    token:user.token,

  }})
  .then((response)=>{

    setFriends(response.data.data)
  })
}
const handleClick=async (id,e)=>{
    e.preventDefault()
  const newFriend= await axios.post(`${url_friends_add}`,{
    friend:id,
    id:user.userInfo._id
    },{headers:{
        token:user.token,
        username:user.userInfo.username    
        
      }

    })
.then((res)=>{setResponse(res.data)})

.catch((err)=>{setResponse( err.response.data)})

setTimeout(()=>{
  setResponse([])
  },3000)

  }


    return (
      <Flex  flexWrap={'wrap'} flexDir='row' h='100%' justifyContent={'space-evenly'} alignContent='center'>
        <Box 
        w={'42%'} 
        display='flex'
        minW={'350px'}
        marginTop={'2rem'}
        alignContent={'space-evenly'}
        justifyContent='center'
      >
    


    <Stack w={'100%'}>
        <form style={{height:'45%',display:'flex',flexDirection:'column'  ,justifyContent:'center'}}>
        
        <FormControl display={'flex'}  flexDirection='row' alignContent='space-around'  justifyContent={'space-around'} alignItems={'flex-start'}   >
      
          <Input id="friends" required={true} borderRadius='25px' type="text" w={'100%'} title='Ingrese el usuario de su amigx' placeholder='Ingrese el usuario de su amigx' onChange={hadndleSubmit}  _focus={{ background:useColorModeValue('#B0D1C4','#4a4e69'  ),fontWeight:'semibold'}} ref={friend}  name='friends' />
          <IconButton aria-label='Search database'background={'transparent'} type='submit'  _hover={{background:'transparent'}} icon={<SearchIcon color={useColorModeValue('darkblue','coral')}  marginLeft='5px'/>} />
          </FormControl>
          
         
        
          </form>
          </Stack>
        </Box>
        <Box w={'100%'}  maxW='950px' h='md'  marginTop={'2rem'}>
  <Table w={'80%'}    variant={'simple'} background={useColorModeValue('transparent','gray.800')}>

    <Thead  w={'80%'}  color={useColorModeValue('blackAlpha.800','blue.400')}>
    <Tr my=".6rem" pl="0px" color="gray.400">
      <Th></Th>
      <Th></Th>
      <Th color={useColorModeValue("blackAlpha.800",'white')}>Username</Th>
      <Th color={useColorModeValue("blackAlpha.800",'white')}>Email</Th>
      <Th color={useColorModeValue("blackAlpha.800",'white')}></Th>
      
    </Tr>
  </Thead>
  <Tbody>
    {
 friends.map((row) => {
  console.log(row)
  
  return (
    <>
<Tr >
  <Td></Td>
  <Td></Td>
  <Td>{row.username}</Td>
  <Td>{row.email}</Td>
  <Td w={'50%'}><AddIcon key={row._id} onClick={(e)=>handleClick(row._id,e)}/>{response.status!=='Success'?<Text marginTop={'0.5rem'} color={'red.500'}>{response.message}</Text>:<ButtonGroup><CheckIcon color={'green.600'}/><Text color={'green.500'}>{response.message}</Text></ButtonGroup> }</Td>
  </Tr>      
 
</>
  
  )
}
 )}
  
  </Tbody>
</Table>


        </Box>
        </Flex>
  )
}
