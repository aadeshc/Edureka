import React from 'react'
import { useSelector } from 'react-redux'

export const MySecondComp = () => {

    const val = useSelector((state)=>state)
  return (
    <div>
       Name : {val.Name} <br/>
       Age : {val.Age}


    </div>
  )
}
