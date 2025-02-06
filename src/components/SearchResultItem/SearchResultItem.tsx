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

    <div className={s.wrapper}>
      <a href={url}><h3 className={s.title}>{name}</h3></a>
      <div className={s.info}>
        <p>Status: <span className={s[status.toLowerCase()]}>{status}</span></p>
        <p>Created: {dateFormatter(created)}</p>
      </div>
    </div>


  )
}