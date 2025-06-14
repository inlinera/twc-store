import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { CreditCard } from '@/shared/icons/CreditCard'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface Card {
  name: string
  number: string
  date: string
  cvc: string
}

export const CardPayBlock = () => {
  const [isChecked, setIsChecked] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Card>({
    mode: 'onChange',
  })

  const onSubmit = (data: Card) => {
    console.log(data)
  }

  const validateTime = (value: string) => {
    const [month, year] = value.split('/')
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() % 100
    const currentMonth = currentDate.getMonth() + 1

    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return 'Срок действия карты истек'
    }
    return true
  }

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
      <form className={`${s.inputs} df fdc aic`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s.inputTitle} df fdc`}>
          <h3>Владелец карты</h3>
          <Input
            {...register('name', {
              required: 'Имя владельца карты обязательно',
              pattern: {
                value: /^[A-Za-zА-Яа-я\s]+$/,
                message: 'Имя должно содержать только буквы',
              },
            })}
            className={errors.name ? s.inputError : ''}
          />
          {errors.name && <span className={s.error}>{errors.name.message}</span>}
        </div>
        <div className={`${s.inputTitle} df fdc`}>
          <h3>Номер карты</h3>
          <Input
            {...register('number', {
              required: 'Номер карты обязателен',
              pattern: {
                value: /^[0-9\s]{13,20}$/,
                message: 'Номер карты должен содержать от 13 до 20 цифр',
              },
            })}
            className={errors.number ? s.inputError : ''}
          />
          {errors.number && <span className={s.error}>{errors.number.message}</span>}
        </div>
        <div className="df aic" style={{ width: '100%', gap: 10 }}>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>Срок действия</h3>
            <Input
              placeholder="ММ/ГГ"
              {...register('date', {
                required: 'Срок действия карты обязателен',
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                  message: 'Формат должен быть ММ/ГГ',
                },
                validate: value => validateTime(value),
              })}
              className={errors.date ? s.inputError : ''}
            />
            {errors.date && <span className={s.error}>{errors.date.message}</span>}
          </div>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>CVC</h3>
            <Input
              {...register('cvc', {
                required: 'CVC код обязателен',
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: 'CVC код должен содержать 3 или 4 цифры',
                },
              })}
              className={errors.cvc ? s.inputError : ''}
            />
            {errors.cvc && <span className={s.error}>{errors.cvc.message}</span>}
          </div>
        </div>
      </form>
    </div>
  )
}
