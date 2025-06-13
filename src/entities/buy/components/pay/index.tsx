import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { CreditCard } from '@/shared/icons/CreditCard'
import { useState } from 'react'

export const CardPayBlock = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={`${s.cardPay} df fdc`}>
      <h2 className={s.title}>Оплата</h2>
      <div className={`${s.payWay} df aic`}>
        <div className={`${s.cardInfo} df fdc aic jcc`}>
          <CreditCard />
          <p>Банковская карта</p>
          <div className={`${s.checkboxWrapper} df aic jcc`}>
            <input
              type="checkbox"
              id="cardCheckbox"
              className={s.customCheckbox}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className={s.checkboxCircle}></div>
          </div>
        </div>
      </div>
      <div className={`${s.inputs} df fdc aic`}>
        <div className={`${s.inputTitle} df fdc`}>
          <h3>Владелец карты</h3>
          <Input />
        </div>
        <div className={`${s.inputTitle} df fdc`}>
          <h3>Номер карты</h3>
          <Input />
        </div>
        <div className="df aic" style={{ width: '100%', gap: 10 }}>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>Срок действия</h3>
            <Input placeholder="ММ/ГГ" />
          </div>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>CVC</h3>
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}
