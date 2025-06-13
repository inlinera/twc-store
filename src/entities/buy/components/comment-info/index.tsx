import s from './index.module.scss'

export const CommentInfo = () => {
  return (
    <div className={`${s.comment} df fdc`}>
      <h2>Дополнительная информация</h2>
      <div className={`${s.input} df fdc`}>
        <div className="df aic">
          <h3>Комментарии к заказу</h3> <span>(Опционально)</span>
        </div>
        <textarea placeholder="Если у вас есть пожелания или комментарии напишите их пожалуйста в данное поле" />
      </div>
    </div>
  )
}
