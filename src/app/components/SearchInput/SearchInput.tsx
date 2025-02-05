import s from './SearchInput.module.css'

export const SearchInput = () => {
    return (
      <div className={s.wrapper}>
        <input className={s.input} type="text"  defaultValue={'Search characters...'}/>
      </div>
    )

}