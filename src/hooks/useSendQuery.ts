import {useState} from "react"
import {API} from "../api/api.ts"

type StatusTypes = 'idle' | 'loading' | 'error' | 'success'

export const useSendQuery = () => {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(null)
  const [status, setStatus] = useState<StatusTypes>('idle')

  const sendQuery = (name: string) => {

    setStatus('loading')
    setError(null)
    setCharacters([])
    setTotalCount(null)

    API.getCharactersByName(name)
      .then(res => {
        if (res.data.results.length === 0) {
          setError('Nothing found try again')
          setCharacters([])
        } else {
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

  return {characters, sendQuery, totalCount, error, status}
}