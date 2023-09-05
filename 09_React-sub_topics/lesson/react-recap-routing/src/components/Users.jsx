import React, { useState,useEffect } from 'react'
import { Link,Outlet} from 'react-router-dom'

export default function Users() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        //on load // onmounting //execute only once becuase of empty dependencies array
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

  return (
    <div>
        <h1>Users Page</h1>
       
        <Outlet/>
        <div>
            {users.map(item=>{
                return (<h2 key={item.id}><Link to={`/users/${item.name}`} state={item}>{item.name}</Link> </h2>)
            })}
        </div>
      
    </div>
  )
}
