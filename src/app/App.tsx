import './App.css'
import {SearchInput} from "../components/SearchInput/SearchInput.tsx"
import {SearchResult} from "../components/SearchResult/SearchResult.tsx"
import {API} from "../api/api.ts"
import {useState} from "react"

type StatusTypes = 'idle' | 'loading' | 'error' | 'success'


function App() {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(null)
  const [status, setStatus] = useState<StatusTypes>('idle')

  const sendQuery = (name:string) => {
    setStatus('loading')
    setError(null)
    API.getCharactersByName(name)
      .then(res => {
        if (res.data.results.length === 0) {
          setError('Nothing found try again')
          setCharacters([])
        } else  {
          setCharacters(res.data.results)
          setTotalCount(res.data.info.count)
          setStatus('success')
        }
      })
      .catch(err => {
        if (err.response?.status === 404) {
          setError("Nothing found try again");
        } else {
          setError("Error occurred");
        }
        setCharacters([]);
        setStatus('error')
      })
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
