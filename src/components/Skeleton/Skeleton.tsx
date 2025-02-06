import s from '../Skeleton/Skeleton.module.css'

export const Skeleton = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}></div>
      <div className={s.info}>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}