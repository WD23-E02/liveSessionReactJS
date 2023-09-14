
/* import './App.css' */
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Main from './components/Main'
import Articles from './components/Articles'
import { useState } from "react"


const MyGlobalStyles=createGlobalStyle`
*{
  margin:0;
  padding:20px;
}
body{
  background-color:${(props)=>props.theme.bodyColor};
  color:${(props)=>props.theme.color};
}
`


const Header = styled.h1`
background-color:aqua;
color:white;
padding:20px
`

const FlexContainer= styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const CirclularImages=styled.img`
border-radius:50%;
width:200px;
height:200px;
`



function App() {
 const [isDark,setIsDark]= useState(false)

  return (
    <ThemeProvider theme={{backgroundColor:isDark?"black":"white", color:isDark?"white":"black", bodyColor: isDark?"gray":"yellow"}}>

      <MyGlobalStyles />
      <button onClick={()=>setIsDark(!isDark)}>change theme</button>
  <Main/>
  <Articles/>



   {/*   <Header title="this is my title">Hello World</Header>
     <FlexContainer> 
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis illo harum, assumenda velit nesciunt enim corporis quae blanditiis rem. Veniam totam ducimus quibusdam mollitia quas iusto tempora repudiandae culpa hic.</p>
     <CirclularImages src="https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg" alt="article image"/>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis illo harum, assumenda velit nesciunt enim corporis quae blanditiis rem. Veniam totam ducimus quibusdam mollitia quas iusto tempora repudiandae culpa hic.</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis illo harum, assumenda velit nesciunt enim corporis quae blanditiis rem. Veniam totam ducimus quibusdam mollitia quas iusto tempora repudiandae culpa hic.</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis illo harum, assumenda velit nesciunt enim corporis quae blanditiis rem. Veniam totam ducimus quibusdam mollitia quas iusto tempora repudiandae culpa hic.</p>
     </FlexContainer> */}
    </ThemeProvider>
  )
}

export default App



