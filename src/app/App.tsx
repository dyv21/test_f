import './App.css'
import {SearchInput} from "../components/SearchInput/SearchInput.tsx"
import {SearchResult} from "../components/SearchResult/SearchResult.tsx"
import {API} from "../api/api.ts"
import {useState} from "react"

type StatusType = 'idle' | 'loading' | 'error' | 'success'


function App() {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [totalCount, setTotalCount] = useState(null)
  const [status, setStatus] = useState<StatusType>('idle')

  const sendQuery = (name:string) => {
    setStatus('loading')
    API.getCharactersByName(name)
      .then(res => {
        setCharacters(res.data.results)
        setTotalCount(res.data.info.count)
      })
      .catch(err => {
        setError(err)
        setStatus('error')
      })
      .finally(() => setStatus('success'))
  }

  return (
    <>
      <SearchInput sendQuery={sendQuery} totalCount={totalCount}/>
      {status === 'success' && totalCount === 0 && <h1>Nothing found try again</h1>}
      {error ? <h1>{error}</h1> : <SearchResult characters={characters}/>}
    </>
  )
}

export default App
