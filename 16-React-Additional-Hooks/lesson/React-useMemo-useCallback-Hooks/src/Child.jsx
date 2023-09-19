import React,{memo} from 'react'

function Child({name,changeUserName}) {
  console.log("child component render ....")
  return (
    <div>Child Component: {name} 
    <button onClick={()=>changeUserName("Joseph")}>change name</button>
    </div>
  )
}
export default memo(Child)



