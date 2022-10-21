import React, { useContext, useRef } from "react"
import { Button,Modal,ModalOverlay,ModalCloseButton,ModalHeader,ModalFooter,ModalContent,ModalBody,FormControl,FormLabel, Avatar, useDisclosure, Input, Flex } from "@chakra-ui/react"
import { FileUpload } from "./FileUpload"
import { AuthContext } from "../../Context/AuthContext"

export const ImageEditModal =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user} =useContext(AuthContext)

    const initialRef = useRef(null)
    const finalRef = useRef(null)
  
    return (
      <>
        <Avatar name={user.username}src={user.userInfo.profile_picture} onClick={onOpen} cursor='pointer' />
  
        <Modal size={'lg'}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit your Profile Picture</ModalHeader>
            <ModalCloseButton  />
            <ModalBody pb={6} >
              <FormControl   width={'100%'} alignItems='center' justifyContent={'center'} display='Flex' flexDir={'column'}>
                <FileUpload/>
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }