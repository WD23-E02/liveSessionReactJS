import React from 'react'

function Header({theme,setTheme}) {
  /*   console.log("render from header ....") */
    return (
        <header style={{border:`2px solid ${theme? 'white':"black"}`}}>
        <h2>TODO APP</h2>
        <p onClick={()=>setTheme(!theme)}>{theme? "dark":"light"}</p>
        </header> 
    )
}

export default Header
