import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { DefaultNavBar } from './DefaultNavBar'
import { SessionNavBar } from './SessionNavBar'

export const NavBar = () => {
const {user}=useContext(AuthContext)
    return (
user?<SessionNavBar/>:<DefaultNavBar/>
  )
}
