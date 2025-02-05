import s from './SearchInput.module.css'
import {useState} from "react"

type PropsType = {
  sendQuery: () => void
}

export const SearchInput = (props: PropsType) => {
  const {sendQuery} = props
  const [find, setFind] = useState('Search characters...')


  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFind(e.target.value)
  }

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendQuery()
    }
  }


  return (
    <header className={s.wrapper}>
      <div className={s.form}>
        <label htmlFor="search-form">Search form</label>
        <input id={"search-form"} className={s.input} type="text" value={find}
               onChange={onChangeHandler} onFocus={() => setFind("") } onKeyUp={onKeyUpHandler}/>
        <span>Found characters: 8</span>
      </div>
    </header>
  )

}