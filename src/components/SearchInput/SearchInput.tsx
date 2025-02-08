import s from './SearchInput.module.css'
import {useState} from "react"

type PropsType = {
  sendQuery: (name: string) => void
  totalCount: number | null
}

export const SearchInput = (props: PropsType) => {
  const {sendQuery, totalCount} = props
  const [value, setValue] = useState('')


  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length > 3) {
      sendQuery(newValue); // ✅ Используем актуальное значение
    }
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendQuery(value)
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