import React,{ useRef } from "react"
import { Button, Drawer,Input,IconButton, DrawerCloseButton, DrawerContent, DrawerOverlay,DrawerFooter,DrawerHeader,DrawerBody, useDisclosure, Flex, ButtonGroup } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"
import { ContactButon } from "./NavItems/ContactButon"
import { ExpensesContactButon } from "./NavItems/ExpensesContactButon"
import { Link } from "react-router-dom"

export const ModalMenu=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
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
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu de Inicio</DrawerHeader>
  
            <DrawerBody>
            <Flex dir="column" align={'center'} justifyContent='space-evenly' width='100%'   alignItems='center' >
                      <ButtonGroup variant="link" spacing="8">
                    
              
                          <Link to={'/'}>
                          Inicio
                          </Link>

                      </ButtonGroup>
                      <ButtonGroup spacing="4" flexDir={'column'}display='flex' >
                        <ContactButon/>
                        </ButtonGroup>
                        <ButtonGroup spacing="2">
                      <ExpensesContactButon  expenses={expenses}key={expenses.index}/>
                      </ButtonGroup>
       </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cerrar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }