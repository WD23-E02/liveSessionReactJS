import React, { useContext } from 'react'
import { MyContext } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    //redirecting user to profile page
    const navigate = useNavigate()

    //using context
      const {setUser} =  useContext(MyContext)
    const loginUser=(e)=>{
        e.preventDefault()
        if(e.target.email.value==="test@gmail.com" && e.target.password.value ==="123"){
            fetch("https://reqres.in/api/users/2")
            .then(res=>res.json())
            .then(result=>{
                   console.log(result.data)
                   setUser(result.data) 
                    navigate("/profile")
            })
        }else{
            alert("your email or password doesn't match")
        }
    }
  return (
    <div>
        <form onSubmit={loginUser}>
            <label htmlFor="">Email: <input type="email" name="email" /></label><br />
            <label htmlFor="">Password: <input type="password" name="password" /></label><br />
            <button>submit</button>
        </form>
    </div>


  )
}



// for class component use context like this 
{/* <MyContext.Consumer>
{(context)=>{
    return ( <div>
        <form onSubmit={loginUser}>
            <label htmlFor="">Email: <input type="email" name="email" /></label><br />
            <label htmlFor="">Password: <input type="password" name="password" /></label><br />
            <button>submit</button>
        </form>
    </div> )
}}
</MyContext.Consumer> */}