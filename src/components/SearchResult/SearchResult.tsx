import s from './SearchResult.module.css'
import {Skeleton} from "../Skeleton/Skeleton.tsx"
import {CharacterType, StatusType} from "../../hooks/useSendQuery.ts"
import {SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"

type SearchResultPropsType = {
  characters: CharacterType[]
  status: StatusType
}

export const SearchResult = (props:SearchResultPropsType) => {
  const {characters, status} = props

  return (
    <main className={s.wrapper}>
      {status === 'loading' && Array.from({ length: 8 }).fill(null).map((_, i) => <Skeleton key={i}/>) }
      {characters && characters.map((character:CharacterType) => <SearchResultItem character={character} key={character.id}/>)}
    </main>
  )

}