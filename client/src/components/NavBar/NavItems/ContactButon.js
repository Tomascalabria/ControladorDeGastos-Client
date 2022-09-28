import { useDisclosure,Menu,MenuButton,MenuItem,MenuList,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const ContactButon = ({props}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
<>

  <Menu isOpen={isOpen}>
           
            <MenuButton
                variant="ghost"
                mx={3}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            
            >
              
                 
                
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                {/* {props.map((item)=>{return(<Link to={item.route}> <MenuList  key={item.index}>{item.name} </MenuList> </Link>)})} */}
              
            </MenuList>
        </Menu>
</>
)
}
