import { Button, useDisclosure,Avatar ,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,DrawerFooter,Input,DrawerCloseButton, Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Text,
  FormLabel,
  Flex,} from '@chakra-ui/react'
import React, { useContext, useRef} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { EmailEditLabel } from './EmailEditLabel'
import { FileUpload } from './FileUpload'
import { ProfileEditLabel, UsernameEditLabel } from './UsernameEditLabel'

export const UserProfile = () => {
    const {user} =useContext(AuthContext)
    console.log(user.userInfo)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    
      return (
        <>
    <Avatar name={user.username}src={user.userInfo.profile_picture} onClick={onOpen} ref={btnRef}/>
      
          <Drawer
          size={'lg'}
            
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                
              <Flex marginTop={'3rem'} display={'inline-flex'} w='100%' justifyContent={'space-between'}>
                <Text>Editar Perfil</Text>
                <Avatar name={user.username}src={user.userInfo.profile_picture} />
                </Flex>
                </DrawerHeader>
           
              <DrawerBody display={'flex'}flexDir='column' alignContent={'center'} marginTop='5rem' >
                <Flex display={'inline-flex'} textAlign={'center'}  justifyContent={'space-between'}  alignItems={'center'}>
               <FormLabel alignItems={'center'}  marginTop={'0.5rem'} fontSize={'md'}>Username: </FormLabel>
              <UsernameEditLabel/>
               </Flex>

               <Flex display={'inline-flex'} textAlign={'center'}  justifyContent={'space-between'} marginTop='2rem' alignItems={'center'}>
               <FormLabel alignItems={'center'}  marginTop={'0.5rem'} fontSize={'md'}>Email: </FormLabel>
              <EmailEditLabel/>
               
               </Flex>
         
              </DrawerBody>
           
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
      
        </>
      )
    }  
