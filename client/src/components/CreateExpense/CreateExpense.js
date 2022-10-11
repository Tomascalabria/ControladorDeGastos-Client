import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'
import {Box,Button,Container,FormControl,FormLabel,Heading,Select,Input,Stack,useBreakpointValue,Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { AuthContext } from '../../Context/AuthContext'
export const CreateExpense = () => {
const {user}=useContext(AuthContext)
const title=useRef()
const tipo=useRef()
const monto=useRef()
const categoria=useRef()
const [status,setStatus]=useState(false)

const submitGasto=(e)=>{
  e.preventDefault()
  console.log({title:title.current.value,amount:monto.current.value,type:tipo.current.value,category:categoria.current.value,creator:user.userInfo.username})
axios.post('/expenses/create/',{title:title.current.value,amount:monto.current.value,type:tipo.current.value,category:categoria.current.value,creator:user.userInfo.username})
.then((res)=>{if(res.status===201){console.log(`Data sent! ${res.data}`,setStatus(res.status))}}
)

.catch((err)=>{
  console.log(err)
})
}

  return (
    <Container
        maxW="lg"
        py={{
            base: '12',
            md: '24',
        }}
        px={{
            base: '0',
            sm: '8',
        }}
        >
        <Heading size={useBreakpointValue({
            base: 'm',
            md: 'xl',
        })} textAlign={'center'} marginTop={'-2em'} >Crear Gasto</Heading>
        <Stack spacing="8">
        <Stack spacing="6">
        
          <Stack
            spacing={{
                base: '2',
                md: '3',
            }}
            textAlign="center"
            >
          </Stack>
        </Stack>
        <Box
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
                sm: 'xl',
            }}
            >
          <form onSubmit={submitGasto}> 
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="text">Titulo</FormLabel>
                <Input id="title" type="title" name='title' ref={title} />
              </FormControl >
           
              <FormControl>
                <FormLabel htmlFor="text">Categoria</FormLabel>
                <Input id="category" type="category" name='category' ref={categoria} />
              </FormControl >
           
              <FormControl>
                <Select ref={tipo} placeholder='Tipo de gasto' required='True'>
                  <option  type='ingreso' id='ingreso' name='ingreso'>Ingreso</option>
                  <option type='egreso'id='egreso' name='egreso'>Egreso</option>
                </Select>
              </FormControl >
            
              <FormControl>
                <FormLabel htmlFor="number">Monto</FormLabel>
                <Input id="monto" type="number" name='monto' ref={monto} />
              </FormControl >

              
             
            </Stack>
            
            <Stack spacing="6">
              <Button type={'submit'} fontWeight='bold' variant="primary" _hover={{background:'##F8FB', color:'black',border:'solid 0.2px black'}}>Crear Gasto</Button>
               
            </Stack>
          </Stack>
          </form>
                  </Box>
                  {status===201?
      <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Felicitaciones!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        Su gasto ha sido creado exitosamente.
      </AlertDescription>
    </Alert>:<></>}
</Stack>
</Container>
  )
}
