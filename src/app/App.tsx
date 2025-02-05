import './App.css'
import {SearchInput} from "../components/SearchInput/SearchInput.tsx"
import {SearchResult} from "../components/SearchResult/SearchResult.tsx"
import {API} from "../api/api.ts"
import {useState} from "react"


function App() {
  const [characters, setCharacters] = useState([])


  const sendQuery = () => {
    API.getCharactersByName().then( res => {

      setCharacters(res.data.results)
    })
  }

  return (
    <>
      <SearchInput sendQuery={sendQuery}/>
      <SearchResult characters={characters}/>
    </>
  )
}

export default App
