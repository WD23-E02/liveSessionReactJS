import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function Profile() {
    const {user} = useContext(MyContext)
  return (
    <div>
        {user ? <>
            <h1>{user.first_name}</h1>
        <img src={user.avatar} alt="" />
        <h2>{user.email}</h2>
        </> : <h1>You need to login first ! </h1>}
       
    </div>
  )
}
