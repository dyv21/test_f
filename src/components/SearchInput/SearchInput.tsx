import s from './SearchInput.module.css'
import {useState} from "react"

export const SearchInput = () => {
  const [find, setFind] = useState('Search characters...')

  return (
    <header className={s.wrapper}>
      <div className={s.form}>
        <label htmlFor="search-form">Search form</label>
        <input id={"search-form"} className={s.input} type="text" value={find}
               onChange={(e) => setFind(e.target.value)} onFocus={() => setFind("")}/>
        <span>Found characters: 8</span>
      </div>
    </header>
  )

}