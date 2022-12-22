import React from 'react'
import { useEffect,useState } from 'react'

export const HooksDemo = () => {


    const [name,setName] = useState("harshad")
    const [age,setAge]= useState(32)


    const [Details,setDetails] = useState({
        Name : "Shurthi",
        Age : 25
    })


   useEffect(()=>{
    //render
    console.log("I am useEffect")
   }) 
   
   useEffect(()=>{
     console.log("I will be called only once")
     return ()=>{
       // cleanuplogic
       // componentwillunmount
     }
   },[])


   useEffect(()=>{

    //componentdidmount
           console.log("I will be called only one name change")
   },[Details.Name])



   const handleChange = (e)=>{
     setDetails({
       ...Details,
        [e.target.name] : e.target.value
     })
}

  return (
    <div>HooksDemo

        name : {Details.Name} <input type="text"  name="Name" onChange={handleChange}/>
        age : {Details.Age} <input type="text" name="Age" onChange={handleChange}/>
    </div>
  )
}
