import { Img, Td, Tr } from '@chakra-ui/react'
import React from 'react'

export const TablesTableRow = ({profile_picture,email,role,username}) => {
  return (
      <>
   <Tr>
      <Td>{username}</Td>
      </Tr>
</>
  )
}
