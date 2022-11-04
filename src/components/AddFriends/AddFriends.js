import { Box, Stack,FormControl,FormLabel,Input,useBreakpointValue, Button} from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export const AddFriends = () => {
const friend=useRef()
const {user}=useContext(AuthContext)
const url='https://controladorgastosapi.herokuapp.com/friends/add'
const handleClick=async (e)=>{
    e.preventDefault()
  const newFriend= await axios.post(`${url}`,{
    friend:friend.current.value.toLowerCase(),
    id:user.userInfo._id
    },{headers:{
        token:user.token,
        username:user.userInfo.username    
      }
    })
.then((res)=>{console.log(res.data)})
.catch((err)=>{console.log( err.response.data.message)})

  }
  

    return (
        <Box 
        w={'100%'} 
        marginTop='3rem'
        h='sm'
        maxH={'350PX'}
        display='flex'

        alignContent={'space-evenly'}
        justifyContent='center'
      >
    <Box
    w={'lg'}
    display='flex'
    flexWrap={'wrap'}
    h='sm'
    justifyContent='center'
    py={{
      base: '0',
      sm: '8',
    }}
    px={{
      base: '4',
      sm: '10',
    }}
    bg={useBreakpointValue({
      base: 'transparent',
      sm: 'bg-surface',
    })}
    boxShadow={'dark-lg'}
    borderRadius={{
      base: 'none',
      sm: 'lg',
    }}

  >


    <Stack h='md'w={'100%'} display='flex' flexWrap='wrap'>
        <form style={{height:'90%',display:'flex',flexDirection:'column',alignItems:'stretch',flexWrap:'wrap'}} onSubmit={handleClick}>
        
      <Stack spacing="5" display={'flex'} w='100%' h='80%' flexDir={'column'} justifyContent='space-around'alignContent={'space-between'} >
        <FormControl display={'flex'} flexDirection='column' alignContent='space-around' justifyContent={'space-around'} alignItems={'flex-start'} height={'35%'} >
          <FormLabel htmlFor="friends">Ingrese el usuario de su amigx</FormLabel>
          <Input id="friends" required={true} type="text" placeholder='Nombre de usuario' ref={friend}  name='friends' />
          </FormControl>
          
          <Button type={'submit'} >Agregar</Button>
          </Stack>
        
          </form>
          </Stack>
        </Box>
        </Box>
  )
}
