import s from './SearchResultItem.module.css'

export const SearchResultItem = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Stair Goblin - Mythological Creature</h3>
      <div className={s.info}>
        <p>Status: <span>Dead</span></p>
        <p>Created: 04.11.2017</p>
      </div>

    </div>
  )

}