import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
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
        pb={{
            
          base: '12',
          md: '18',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="40" 
            
      justifyContent='center'
      >
              <h3 style={{color:'black',fontWeight:'bold ',fontFamily:'monospace',fontSize:'25px', letterSpacing:'2.3   px',justifySelf:'flex-end'}} >ProyectoFinal</h3>
              {isDesktop ? (
                <Flex justifyContent='space-between' width='xxl' display='inline-Flex'  alignItems='center' >
                  <ButtonGroup variant="link" spacing="8">
                    {['Inicio' ].map((item) => (
                      <Link key={item}  to={'/'}>
                        {item} 

                      </Link>

                    ))}
                  </ButtonGroup>
                  <ButtonGroup spacing="4" >
                    <Link to='/login'><Button   variant="ghost" style={{marginLeft:'3rem'}}>Sign in</Button></Link>
                    <Link to='register'><Button variant="ghost" >Sign up</Button></Link>
                  </ButtonGroup>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }