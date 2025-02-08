import s from './SearchInput.module.css'
import {useState} from "react"

type PropsType = {
  sendQuery: (name: string) => void
  totalCount: number | null
}

export const SearchInput = (props: PropsType) => {
  const {sendQuery, totalCount} = props
  const [value, setValue] = useState('')
  const [params, setParams] = useState('')


  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    setParams(value)
    if (value.length > 3) {
      sendQuery(params)
    }
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendQuery(params)
    }
    if (e.key === 'Escape') {
      setValue('')
    }
  }


  return (
    <header className={s.wrapper}>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={"search-form"}>
          <input name={"search-form"} id={"search-form"} className={s.input} type="text"
                 value={value}
                 onChange={onChangeHandler} onFocus={() => setValue('')}
                 onKeyDown={onKeyDownHandler} autoFocus aria-label="Search form" placeholder="Search characters..."/>
        </label>

        {totalCount !== null && <span>Found characters: {totalCount}</span>}
      </form>
    </header>
  )

}