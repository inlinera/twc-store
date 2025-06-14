import s from './index.module.scss'

export const OrderInfo = () => {
  return (
    <div className={`${s.orderInfo} df aic jcsb`}>
      <div className="df fdc">
        <h2>#5894739</h2>
        <div className="df aic">
          <p>4 товара</p>
          <span>•</span>
          <p>Заказ создан 12 апреля 2025 в 18:00</p>
        </div>
      </div>
      <b>1 000 ₽</b>
    </div>
  )
}
