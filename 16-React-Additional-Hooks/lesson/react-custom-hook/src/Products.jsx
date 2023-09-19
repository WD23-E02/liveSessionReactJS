import React from 'react'
import { useFetch } from './custom/myCustomHook'

export default function Products() {
    const {loading,data,error} =useFetch("https://dummyjson.com/products")
  return (
    <div><h1>
        Products
        </h1>
        {loading? <h1>loading ....</h1>: <div>
            {data?.products?.map(item=>(<div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt="" />

            </div>))}
            
            </div>}
        
        
        
        
        </div>
  )
}
