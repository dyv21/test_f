import s from './SearchResult.module.css'
import {CharacterType, SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"
import {Skeleton} from "../Skeleton/Skeleton.tsx"
import {StatusTypes} from "../../hooks/useSendQuery.ts"

type SearchResultPropsType = {
  characters: CharacterType[]
  status: StatusTypes
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