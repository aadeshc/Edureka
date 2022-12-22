import React from 'react'

import { UserContext } from './MyUserContext'
import { useContext } from 'react'
export const ThirdComp = () => {

const DetailsName = useContext(UserContext)



  console.log(DetailsName)
  return (
    <div>{DetailsName.Name}</div>
  )
}
