import React from 'react'
import  styled  from 'styled-components'

const ArticleContainer =styled.div`
background-color:${props=>props.theme.backgroundColor};
color: ${props=>props.theme.color}
` 



export default function Articles() {
  return (
    <ArticleContainer><h1>Articles Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur omnis saepe fugiat quidem aspernatur quae, fugit doloremque ut alias, aliquid consequatur harum esse deleniti repellendus excepturi dolorum laborum sequi corporis!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur omnis saepe fugiat quidem aspernatur quae, fugit doloremque ut alias, aliquid consequatur harum esse deleniti repellendus excepturi dolorum laborum sequi corporis!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur omnis saepe fugiat quidem aspernatur quae, fugit doloremque ut alias, aliquid consequatur harum esse deleniti repellendus excepturi dolorum laborum sequi corporis!</p>
    </ArticleContainer>
  )
}
