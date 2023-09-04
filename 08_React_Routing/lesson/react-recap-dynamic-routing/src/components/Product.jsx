import React, { useEffect,useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Product() {
    const {state} = useLocation()
    console.log(location)
   /*  const {id} = useParams() */

  /*   const [product, setProduct] = useState(null) */

 /*    useEffect(()=>{
        //after mounting
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        })
    },[]) */

  return (
    <div> 
       {/*  <h2>{location?.state?.title}</h2>
        <img src={location?.state?.thumbnail} alt="" />
        <p>{location?.state?.description}</p> */}

        {state ? <>
            <h2>{state.title}</h2>
        <img src={state.thumbnail} alt="" />
        <p>{state.description}</p>
        
        </>: <h2>No data found!</h2>}

    </div>
  )
}
