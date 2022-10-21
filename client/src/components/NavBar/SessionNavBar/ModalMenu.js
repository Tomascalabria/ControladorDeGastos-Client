import React,{ useRef } from "react"
import { Button, Drawer,IconButton, DrawerCloseButton, DrawerContent, DrawerOverlay,DrawerFooter,DrawerHeader,DrawerBody, useDisclosure, Flex, ButtonGroup,Text} from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"
import { ExpensesContactButon } from "./ExpensesContactButon"
import { Link } from "react-router-dom"
// import { AuthContext } from "../../../Context/AuthContext"
import { UserProfile } from "../../../UserProfile/UserProfile"

export const ModalMenu=({props})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    // const {user}=useContext(AuthContext)
    const expenses=[{name:'Crear Gasto',index:0,route:'/gastos/crear'},{name:'Ver gastos',index:1,route:'/gastos/ver'},{name:'Agregar amigos',index:2,route:'/gastos/agregarAmigos'}]

    return (
      <>

       <IconButton
                      variant="ghost"
                      icon={<FiMenu fontSize="1.25rem" />}
                      aria-label="Open Menu" ref={btnRef} colorScheme='teal' onClick={onOpen}/>

        <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader display={'inline-flex'} w='lg'>
              <Text>Menu de Inicio</Text>

            </DrawerHeader>
  
            <DrawerBody display={'flex'} flexDir='column' height={'100%'}alignItems='center'>
            <Flex flexDir={'column'} align={'center'}  justifyContent='space-between' marginTop={'2rem'} width='100%'h={'40%'}   alignItems='center' >
                      <ButtonGroup  justifyContent='center' variant="link" spacing="8">
                    
              
                          <Link to={'/'}>
                          Inicio
                          </Link>
                      </ButtonGroup>

                        <ButtonGroup spacing="8" >
                      <ExpensesContactButon  expenses={expenses}key={expenses.index}/>
                      </ButtonGroup>
                  <ButtonGroup marginBottom={'-9rem'} >
                    <UserProfile />
                  </ButtonGroup>
       </Flex>
            </DrawerBody>
            <DrawerFooter   >
                  <ButtonGroup justifyContent={'center'} w='100%' >
                  <Button w={'%'} _hover={{background:'red.600'}} variant="ghost" onClick={props.handleLogout} >Logout</Button>
                  </ButtonGroup>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }