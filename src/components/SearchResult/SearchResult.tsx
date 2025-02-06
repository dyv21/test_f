import s from './SearchResult.module.css'
import {SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"


export const SearchResult = (props:any) => {
  const {characters} = props
  console.log(props)
  return (
    <main className={s.wrapper}>
      {characters && characters.map((character:any) => <SearchResultItem character={character}/>)}
    </main>
  )

}