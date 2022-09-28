import React from 'react'
import {Box,Button,Container,FormControl,FormLabel,Heading,Select,Input,Stack,useBreakpointValue,Alert,AlertDescription,AlertIcon,AlertTitle} from '@chakra-ui/react'

export const CreateExpense = () => {
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
          <form onSubmit={handleSubmit}> 
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Titulo</FormLabel>
                <Input id="title" type="title" name='title' ref={title} />
              </FormControl >
           
              <FormControl>
                <Select placeholder='Tipo de gasto'>
                  <Option>Ingreso</Option>
                  <Option>Egreso</Option>
                </Select>
              </FormControl >
            
              <FormControl>
                <FormLabel htmlFor="monto">Monto</FormLabel>
                <Input id="monto" type="monto" name='monto' ref={monto} />
              </FormControl >

              
             
            </Stack>
            
            <Stack spacing="6">
              <Button type={'submit'} fontWeight='bold' variant="primary" _hover={{background:'##F8FB', color:'black',border:'solid 0.2px black'}}>Registrarme</Button>
               
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
        Su usuario ha sido registrado exitosamente.
      </AlertDescription>
    </Alert>:<></>}
    
</Stack>
</Container>
  )
}
