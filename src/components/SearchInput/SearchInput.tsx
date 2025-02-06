import s from './SearchInput.module.css'
import {useState} from "react"

type PropsType = {
  sendQuery: (name:string) => void
  totalCount: number | null
}

export const SearchInput = (props: PropsType) => {
  const {sendQuery, totalCount} = props
  const [value, setValue] = useState('Search characters...')
  const [params, setParams] = useState('')


  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    setParams(value)
    if (value.length > 3) {
      sendQuery(params)
    }
  }


  return (
    <header className={s.wrapper}>
      <div className={s.form}>
        <label htmlFor="search-form">Search form</label>
        <input id={"search-form"} className={s.input} type="text" value={value}
               onChange={onChangeHandler} onFocus={() => setValue('')} autoFocus/>
        {totalCount !== null && <span>Found characters: {totalCount}</span>}
      </div>
    </header>
  )

}