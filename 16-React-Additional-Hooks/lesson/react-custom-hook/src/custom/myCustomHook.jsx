import { useEffect, useState } from "react";

export function useFetch(url){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            setData(result)
            setLoading(false)
        })
        .catch(err=>setError(err))
    },[])

    return {loading,data,error}

}