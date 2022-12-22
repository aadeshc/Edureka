import React, { useEffect } from 'react'

export const Home = () => {


    useEffect(()=>{
                 fetch('http://localhost:6710/comments').then((res)=>{
                             return res.json()
                 }).then((res)=> console.log(res))
    },[])
  return (
    <div>Home</div>
  )
}
