import s from './SearchResult.module.css'
import {CharacterType, SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"

type SearchResultPropsType = {
  characters: CharacterType[]
}

export const SearchResult = (props:SearchResultPropsType) => {
  const {characters} = props

  return (
    <main className={s.wrapper}>
      {characters && characters.map((character:CharacterType) => <SearchResultItem character={character} key={character.id}/>)}
    </main>
  )

}