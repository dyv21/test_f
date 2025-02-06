import s from './SearchResultItem.module.css'
import {dateFormatter} from "../../utils/utils.ts"

export type CharacterType = {
  id: number
  name: string
  status: string
  created: string
  url: string
}

export type SearchResultItemPropsType = {
  character: CharacterType
}

export const SearchResultItem = (props: SearchResultItemPropsType) => {
  const {name, status, created, url} = props.character

  return (

    <a href={url} className={s.wrapper}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.info}>
        <p>Status: <span className={s[status.toLowerCase()]}>{status}</span></p>
        <p>Created: {dateFormatter(created)}</p>
      </div>
    </a>


  )
}