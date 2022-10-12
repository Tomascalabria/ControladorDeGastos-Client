import {
    Box,
    Button,
    Heading,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Spacer,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'

  export const DefaultNavBar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
       <Box 
          as="section"
          w={'100%'}
          display={'inline-flex'}
          justifyContent='flex-start'
          pb={{
              
            base: '12',
            md: '18',
          }}
        >
          <Box as="nav" bg="bg-surface" w={'100%'} justifyContent='flex-start' display={'inline-flex'}   boxShadow={useColorModeValue('sm', 'sm-dark')} >
            <Flex py={{ base: '4', lg: '5' }} w={'100%'} justifyContent='space-evenly' >
                    <Spacer />
              <Box p='3'  ><Link to={'/'}><Heading size='md' style={{color:'black',fontWeight:'bold ',fontFamily:'monospace',fontSize:'25px', letterSpacing:'2.3px' }}>Anotador de Gastos</Heading></Link></Box>
          
                    {isDesktop ? (
                    <Flex justifyContent='space-evenly' width='65%' display='inline-Flex'  alignItems='center' >
                    
       
                  <HStack spacing="4" >
                    <Link to='/login'><Button   variant="ghost" style={{marginLeft:'6em'}}>Sign in</Button></Link>
                    <Link to='register'><Button variant="ghost" >Sign up</Button></Link>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </Flex>
        </Box>
      </Box>
    )
  }