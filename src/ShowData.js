import React,{useEffect,useState} from 'react'

export const ShowData = () => {

 const [data,setData] = useState([])


 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/Users')
    .then(response => response.json())
    .then(json => setData(json))
 },[])
  return (
    <div>
        <table>
            {
                (data.map((e)=>{
                    return <tr><td>{e.id}</td> <td>{e.name}</td> <td>{e.address.geo.lat}</td></tr>
                }))
            }
        </table>
    </div>
  )
}
