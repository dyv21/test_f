import {useCallback, useState} from "react"
import {API} from "../api/api.ts"

export type StatusType = 'idle' | 'loading' | 'error' | 'success'
export type CharacterType = {
  id: number
  name: string
  status: string
  created: string
  url: string
}

type useSendQueryType = {
  characters: CharacterType[],
  sendQuery: (name: string) => void,
  totalCount: number | null
  error: string | null,
  status: StatusType
}



export const useSendQuery = ():useSendQueryType => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(null)
  const [status, setStatus] = useState<StatusType>('idle')

  const sendQuery = useCallback((name: string) => {

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
  }, [])

  return {characters, sendQuery, totalCount, error, status}
}