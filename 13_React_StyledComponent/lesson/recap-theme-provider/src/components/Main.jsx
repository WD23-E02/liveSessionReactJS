import React, { useContext } from 'react'
import  styled, { ThemeContext }  from 'styled-components'

const MainContainer =styled.div`
background-color:${props=>props.theme.backgroundColor};
color: ${props=>props.theme.color}
` 

export default function Main() {
/*     const context = useContext(ThemeContext) */
    
  return (
  
    <MainContainer>
        <h1>This is our Main section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat quibusdam at repellendus accusamus cum aspernatur a numquam repudiandae necessitatibus, obcaecati distinctio nulla tempore hic quas voluptates, laboriosam eligendi consectetur quos pariatur iure commodi harum. Eveniet at totam recusandae cupiditate expedita assumenda accusamus ea exercitationem impedit. Unde soluta obcaecati iste similique quam! Quibusdam facere nobis eum voluptas sunt? Enim non possimus eligendi. Debitis laboriosam sit saepe explicabo delectus cum perspiciatis laudantium? Quia velit, dolores quo nulla nemo totam nisi odio possimus, corrupti, sapiente voluptates fugiat. Quis minima qui perferendis obcaecati exercitationem itaque aperiam vel sint saepe nulla dolores nam error repellendus laboriosam totam reiciendis sunt voluptate, quaerat pariatur tempora deserunt sapiente suscipit libero dicta. Repudiandae, asperiores ad beatae molestiae dicta neque laudantium rerum eaque aut nam atque laboriosam vel. Nihil hic quos ea recusandae reprehenderit magni! Ullam molestias excepturi fugiat veritatis harum quae quam rerum iste est voluptatum nihil, odit dolores porro ratione dolore hic id aliquam eum. Aspernatur eaque sit aliquid mollitia. Sunt sapiente iusto dolores est officia doloremque delectus voluptas deleniti officiis alias. Corrupti, nesciunt nostrum quo reprehenderit est facilis asperiores sunt eius qui odit culpa tempora autem explicabo quod nihil illum eaque molestias mollitia ab similique modi.</p>
   
  </MainContainer>
  )
}
