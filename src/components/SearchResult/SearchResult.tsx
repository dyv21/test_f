import s from './SearchResult.module.css'
import {SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"


export const SearchResult = (props:any) => {
  const {characters} = props
  return (
    <main className={s.wrapper}>
      {characters && characters.map((character) => <SearchResultItem character={character}/ >)}
    </main>
  )

}