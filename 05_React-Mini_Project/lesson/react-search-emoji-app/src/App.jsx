import { useState } from "react";
import EmojiContainer from "./components/EmojiContainer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import emojis from "./json/emoji.json"

function App() {
  const [inputValue, setInputValue]=useState("")


  const filteredData = emojis.filter(emoji=>emoji.keywords.match(inputValue))


  return (
    <div style={{background:"linear-gradient(to right,purple,black)"}}>
     <Header/>
     <SearchBar setInputValue={setInputValue}/>
     <EmojiContainer emojis={filteredData}/>
    </div>
  )
}

export default App