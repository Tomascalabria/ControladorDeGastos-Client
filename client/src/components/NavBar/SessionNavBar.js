import React,{useContext} from 'react'
  import {
        Box,Button,ButtonGroup,WrapItem,Avatar,Container,Flex,HStack,IconButton,useBreakpointValue,useColorModeValue, Spacer,Heading,} from '@chakra-ui/react'
      import { Link } from 'react-router-dom'
      import { FiMenu } from 'react-icons/fi'
    import { ContactButon } from './NavItems/ContactButon'
import { AuthContext } from '../../Context/AuthContext'
import { logoutProcess } from '../../Context/ApiCall'
import { ExpensesContactButon } from './NavItems/ExpensesContactButon'
    
export const SessionNavBar = () => {
  const {user,dispatch} =useContext(AuthContext)
  const handleLogout=()=>{
    logoutProcess(dispatch)
  }
  
  const expenses=[{name:'Crear Gasto',index:0,route:'/gastos/crear'},{name:'Ver gastos',index:1,route:'/gastos/ver'},{name:'Agregar amigos',index:2,route:'/gastos/agregarAmigos'}]

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
              <Box p='3'  ><Heading size='md' style={{color:'black',fontWeight:'bold ',fontFamily:'monospace',fontSize:'25px', letterSpacing:'2.3px' }}>Anotador de Gastos</Heading></Box>
          
                    {isDesktop ? (
                    <Flex justifyContent='space-evenly' width='65%' display='inline-Flex'  alignItems='center' >
                      <ButtonGroup variant="link" spacing="8">
                    
              
                          <Link to={'/'}>
                          Inicio
                          </Link>

                      </ButtonGroup>
                      <ButtonGroup spacing="4" marginRight={'3rem'} >
                        <ContactButon/>
                        </ButtonGroup>
                        <ButtonGroup spacing="2">
                      <ExpensesContactButon expenses={expenses}/>
                      </ButtonGroup>
       
                      <ButtonGroup spacing="4" marginRight={'3rem'} >
                        
                        <WrapItem>
                     <Avatar  name={user.username}src={user.profile_picture} />
                        </WrapItem>
                        <Button variant="ghost" onClick={handleLogout} >Logout</Button>
                        </ButtonGroup>
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