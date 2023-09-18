
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import Container from './context/Container'
function App() {
  return (
    <Container>
      <Header/>
      <Counter/>
      <TodoContainer/>
    </Container>
  )
}

export default App
