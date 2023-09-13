import React, { useState } from 'react'
import { MyContext } from './reactContext'

export default function Container({children}) {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

  return (
   <MyContext.Provider value={{x,y,setX,setY}}>
    {children}
   </MyContext.Provider>
  )
}


