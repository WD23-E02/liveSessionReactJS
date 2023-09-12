import React from 'react'

export default function Article({children}) {
  return (
    <div style={{backgroundColor:"yellow"}} onClick={()=>alert("you clicked on article children")}>
        {children}
    </div>
  )
}
