import s from './SearchResultItem.module.css'
import {dateFormatter} from "../../utils/utils.ts"

type SearchResultItemPropsType = {
  character: {
    name: string
    status: string
    created: string
    url: string
  }
}

export const SearchResultItem = (props: SearchResultItemPropsType) => {
  const {name, status, created, url} = props.character


  return (

    <a className={s.wrapper} href={url}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.info}>
        <p>Status: <span className={s[status.toLowerCase()]}>{status}</span></p>
        <p>Created: {dateFormatter(created)}</p>
      </div>
    </a>



  )
}