import s from './index.module.scss'

export const ProductInfoHeader = () => {
  return (
    <div className={`${s.header} df aic jcsa`}>
      <button className={s.active}>Описание</button>
      <button>Спецификации</button>
    </div>
  )
}
