import React from 'react'

export default function Button({children, color}) {
  return (
    <button style={
        {
            backgroundColor:color==="primary"?"blue":
        color==="success"?"green":"yellow"
    }}
        >{children}</button>
  )
}
