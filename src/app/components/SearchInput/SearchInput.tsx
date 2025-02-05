import s from './SearchInput.module.css'

export const SearchInput = () => {
    return (
      <div className={s.wrapper}>
        <div className={s.form}>
          <label htmlFor="search-form">Search form</label>
          <input id={"search-form"} className={s.input} type="text" defaultValue={'Search characters...'}/>
          <span>Found characters: 8</span>
        </div>
      </div>
    )

}