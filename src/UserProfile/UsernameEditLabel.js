import React, { useContext } from 'react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    ButtonGroup,useEditable,useEditableControls,Input,Flex,IconButton
  } from '@chakra-ui/react'
import {CheckIcon,CloseIcon,EditIcon} from '@chakra-ui/icons'
import { AuthContext } from '../Context/AuthContext'

export const UsernameEditLabel=()=> {
    const{user}=useContext(AuthContext)
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='left' alignItems={'center'}  display={'inline-flex'}>
          <IconButton marginLeft={'1.2rem'}  size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        textAlign='center  '
        defaultValue={user.userInfo.username}
        fontSize='md'
        alignContent={'center'}
        isPreviewFocusable={false}
      >
        <EditablePreview  marginLeft={'2rem'} alignItems='center' fontSize={'md'}/>
        {/* Here is the custom input */}
        <Input as={EditableInput} />
        <EditableControls  />
      </Editable>
    )
  }