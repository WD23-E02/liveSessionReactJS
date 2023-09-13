
import './App.css'
import X from './components/X'
import Y from './components/Y'
import Container from './context/Container'

function App() {
  return (
    <Container /* children={[<X/>,<Y/>]} */> 
     <X/>
     <Y/>
   </Container>
  )
}

export default App

