import './App.css'
import {SearchInput} from "../components/SearchInput/SearchInput.tsx"
import {SearchResult} from "../components/SearchResult/SearchResult.tsx"
import {useSendQuery} from "../hooks/useSendQuery.ts"

function App() {

  const {characters, sendQuery, totalCount, error, status} = useSendQuery()


  return (
    <>
      <SearchInput sendQuery={sendQuery} totalCount={totalCount}/>
      {error ? <h1>{error}</h1> : <SearchResult characters={characters} status={status}/>}
    </>
  )
}

export default App
