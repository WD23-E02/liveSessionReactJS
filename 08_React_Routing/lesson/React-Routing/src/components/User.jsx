import React from 'react'
import {useParams,useLocation,useNavigate} from"react-router-dom"
import QueryString from "query-string"
export default function User() {

  const location = useLocation()
  const parameter = useParams()
  const navigate = useNavigate()
 
  const {price,ref} = QueryString.parse(location.search)
  
  return (
    <div>User {parameter.id} , price : {price} ref: {ref} 
    <button onClick={()=>navigate(-1)}>go back</button> {/* // go back to previous route */}

    {/* <button onClick={()=>navigate("/users")}>go back</button> */}
   {/*  <Link to="/users">go back</Link> */}
    </div>
  )
}
