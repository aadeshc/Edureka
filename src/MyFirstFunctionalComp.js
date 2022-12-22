import React, { useEffect } from 'react'

export const MyFirstFunctionalComp = () => {


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
    },[])

  return (
    <div>MyFirstFunctionalComp</div>
  )
}
