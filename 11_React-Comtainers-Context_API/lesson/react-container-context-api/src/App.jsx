import './App.css'
import Article from './Article'
import Child from './Child'

function App() {
  return (
    <>
    <h1>React Containers vs React Components</h1>
    <h1>Containers</h1>
    <p>React Container can be reffered to as a parent element for other components</p>
    <p>These are the components that provide, create, or hold data for the children components. The only job of a container component is to handle data. It does not consist of any UI of its own. Rather, it consists of presentational components as its children that uses this data.</p>
    <Article>  <p>React Containers are responsible for handling logical part of your application</p> </Article>
  
    <h1>Components</h1>
    <p>React Components are responsible for respresentational part of your application</p>

    <Article>
        <Child/>
    </Article>
    <Child/>
    <Child/>
    </>

  )
}




export default App
