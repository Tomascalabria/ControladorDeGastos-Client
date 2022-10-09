import React, { useRef } from 'react'
import axios from 'axios'
import {Box,Button,Container,FormControl,FormLabel,Heading,Select,Input,Stack,useBreakpointValue} from '@chakra-ui/react'


export const CreateExpense = () => {

const title=useRef()
const tipo=useRef()
const monto=useRef()

const submitGasto=(e)=>{
  e.preventDefault()
axios.post('/expenses/create/',{title:title.current.value,amount:monto.current.value,category:tipo.current.value})
.then((res)=>{if(res.status===201){console.log(`Data sent! ${res.data}`)}})
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
                <FormLabel htmlFor="username">Titulo</FormLabel>
                <Input id="title" type="title" name='title' ref={title} />
              </FormControl >
           
              <FormControl>
                <Select ref={tipo} placeholder='Tipo de gasto'>
                  <option  type='ingreso' id='ingreso' name='ingreso'>Ingreso</option>
                  <option type='egreso'id='egreso' name='egreso'>Egreso</option>
                </Select>
              </FormControl >
            
              <FormControl>
                <FormLabel htmlFor="monto">Monto</FormLabel>
                <Input id="monto" type="monto" name='monto' ref={monto} />
              </FormControl >

              
             
            </Stack>
            
            <Stack spacing="6">
              <Button type={'submit'} fontWeight='bold' variant="primary" _hover={{background:'##F8FB', color:'black',border:'solid 0.2px black'}}>Crear Gasto</Button>
               
            </Stack>
          </Stack>
          </form>
                  </Box>
     
</Stack>
</Container>
  )
}
