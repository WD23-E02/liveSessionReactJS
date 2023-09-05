import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleUser() {
    const {state} = useLocation()
  return (
    <div>
        <h1>SingleUser page</h1>
       
        <h2>{state?.name}</h2>
        <p>{state?.email}</p>
      
    </div>
  )
}
