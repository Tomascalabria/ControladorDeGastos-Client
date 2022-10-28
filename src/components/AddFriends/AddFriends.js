import { Box, Stack,FormControl,FormLabel,Input,useBreakpointValue, Button} from '@chakra-ui/react'
import React, { useRef } from 'react'

export const AddFriends = () => {
const {friend}=useRef()
const handleClick=(e)=>{
    e.preventDefault()
console.log('holla')
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


    <Stack spacing="6" h='100%' >
        
      <Stack spacing="5" display={'flex'} h='100%'>

        <FormControl onSubmit={handleClick}>
          <FormLabel htmlFor="friends">Ingrese el usuario de su amigx</FormLabel>
          <Input id="friends" onFocus={{background:'Black',color:'red'}} required='true' type="friends" placeholder='Nombre de usuario' ref={friend}  name='friends' />
          </FormControl>
          </Stack>
          <Button >Agregar</Button>
          </Stack>
        </Box>
        </Box>
  )
}
