import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'

export default function Home() {
    const {posts,setPosts} = useContext(MyContext)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts)
        })
    }, [])
  return (
    <div><h1>This is my Home Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate velit veritatis eos, voluptatem voluptates delectus sequi quidem architecto ab fugit nemo earum expedita! Praesentium deleniti consequuntur, minima adipisci perferendis architecto voluptatum quos, provident natus veritatis sunt aspernatur. Possimus atque debitis quis illo ratione quasi facilis accusamus repellat, impedit ab, blanditiis dolore dolorum. Praesentium architecto eveniet nobis atque debitis incidunt fugiat veritatis, pariatur maxime illum voluptatum, rerum quia! Nostrum incidunt nesciunt repellat modi id dolorum repellendus iure facere eos tenetur beatae, aliquid nisi enim! Perferendis similique voluptatem velit voluptate exercitationem tenetur saepe quam necessitatibus natus, impedit voluptatum excepturi architecto dolor, soluta, aspernatur quo aliquid odit minus nesciunt nemo! Sapiente dolorum repellendus dolor, minima ut vitae numquam sed consequatur sunt id corporis eveniet est debitis laudantium deleniti quidem quos accusamus repellat reiciendis libero architecto? Unde est provident molestiae quasi, soluta quo, voluptate blanditiis fugit non illum ratione modi quisquam esse veritatis suscipit quidem consectetur. Rerum aliquam nihil dolore officia architecto laboriosam, ut unde dolorum odio non consectetur, quaerat assumenda quam quia sapiente vel officiis ducimus perspiciatis, maxime quas nemo corrupti veritatis. Soluta sequi odit delectus esse debitis laborum blanditiis neque voluptas id, nulla provident molestias similique velit nostrum iste, possimus vero et?</p>
    {posts.map(post=>(<h3>{post.title}</h3>))}
    </div>
  )
}
