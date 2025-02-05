import s from './SearchResultItem.module.css'
import {dateFormatter} from "../../utils/utils.ts"

export const SearchResultItem = (props: any) => {
  const {name, status, created} = props.character


  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.info}>
        <p>Status: <span className={s[status.toLowerCase()]}>{status}</span></p>
        <p>Created: {dateFormatter(created)}</p>
      </div>

    </div>
  )


}