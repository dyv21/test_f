import s from './SearchResult.module.css'
import {SearchResultItem} from "../SearchResultItem/SearchResultItem.tsx"

export const SearchResult= () => {
  return (
    <main className={s.wrapper}>
      {Array.from({ length: 8 }).fill(null).map(() => <SearchResultItem/>) }
    </main>
  )

}