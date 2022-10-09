import React,{useContext} from 'react'
  import {
        Box,Button,ButtonGroup,WrapItem,Avatar,Container,Flex,HStack,IconButton,useBreakpointValue,useColorModeValue, ListItem,} from '@chakra-ui/react'
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
            marginTop={'15px'}
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
                </HStack>
              </Container>
            </Box>
          </Box>
        )
      }