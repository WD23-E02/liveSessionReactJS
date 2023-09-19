

import {useFetch} from "./custom/myCustomHook"
import './App.css'
import Products from "./Products"

function App() {

  const {loading,data,error} = useFetch("https://reqres.in/api/users?page=2")

  if(error){
    return <h1>{err.message}</h1>
  }

  return (
    <>
      <h1>React Custom Hook</h1>
      {loading? <h1>loading ......</h1> :<div>
        {data?.data?.map(user=>(<div>
          <img src={user.avatar} alt="" />
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>))}
      </div> }
      
      <Products/>
    </>
  )
}

export default App
