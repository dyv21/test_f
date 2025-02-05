import './App.css'
import {SearchInput} from "../components/SearchInput/SearchInput.tsx"
import {SearchResult} from "../components/SearchResult/SearchResult.tsx"
import {API} from "../api/api.ts"
import {useState} from "react"


function App() {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  const sendQuery = () => {
    API.getCharactersByName()
      .then(res => {
        setCharacters(res.data.results)
        setTotalCount(res.data.info.count)
      })
      .catch(err => setError(err))
  }

  return (
    <>
      <SearchInput sendQuery={sendQuery} totalCount={totalCount}/>
      <SearchResult characters={characters}/>
    </>
  )
}

export default App
