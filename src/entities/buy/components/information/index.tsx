import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { useForm } from 'react-hook-form'
import type { IOrder } from '@/shared/interfaces/IOrder'
import React from 'react'
import { Button } from '@/shared/ui/button'

interface UserInformationFormProps {
  onSubmit: (data: IOrder) => void
  defaultValues?: Partial<IOrder>
  isRegistration?: boolean
}

export const UserInformationForm: React.FC<UserInformationFormProps> = ({
  onSubmit,
  defaultValues = {},
  isRegistration = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<IOrder>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  })

  return (
    <form className={`${s.infoBuy} df fdc`} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${s.inputRow} df aic`}>
        <div className="df fdc">
          <h4>ФИО</h4>
          <div className="df aic">
            <div className="df fdc">
              <Input
                placeholder="Имя"
                {...register('firstName', {
                  required: 'Имя обязательно',
                  onChange: () => trigger('firstName'),
                })}
                className={`${s.input} ${errors.firstName ? s.inputError : ''}`}
              />
              {errors.firstName && <span className={s.error}>{String(errors.firstName.message)}</span>}
            </div>
            <div className="df fdc">
              <Input
                placeholder="Фамилия"
                {...register('lastName', {
                  required: 'Фамилия обязательна',
                  onChange: () => trigger('lastName'),
                })}
                className={`${s.input} ${errors.lastName ? s.inputError : ''}`}
              />
              {errors.lastName && <span className={s.error}>{String(errors.lastName.message)}</span>}
            </div>
          </div>
        </div>
        <div className={`df fdc`}>
          <div className={`${s.optional} df aic`}>
            <h4>Компания</h4> <span> (Опционально)</span>
          </div>
          <Input {...register('company')} className={s.input} />
        </div>
      </div>
      <div className={`${s.inputRow} df aic`}>
        <div className={`df fdc`}>
          <h4>Адрес</h4>
          <Input
            {...register('address', {
              required: 'Адрес обязателен',
              onChange: () => trigger('address'),
            })}
            className={`${s.input} ${errors.address ? s.inputError : ''}`}
          />
          {errors.address && <span className={s.error}>{String(errors.address.message)}</span>}
        </div>
      </div>
      <div className={`${s.inputRow} df aic`}>
        <div className={`df fdc`}>
          <h4>Регион</h4>
          <Input
            {...register('region', {
              required: 'Регион обязателен',
              onChange: () => trigger('region'),
            })}
            className={`${s.input} ${errors.region ? s.inputError : ''}`}
          />
          {errors.region && <span className={s.error}>{String(errors.region.message)}</span>}
        </div>
        <div className={`df fdc`}>
          <h4>Город</h4>
          <Input
            {...register('city', {
              required: 'Город обязателен',
              onChange: () => trigger('city'),
            })}
            className={`${s.input} ${errors.city ? s.inputError : ''}`}
          />
          {errors.city && <span className={s.error}>{String(errors.city.message)}</span>}
        </div>
        <div className={`df fdc`}>
          <h4>Почтовый код</h4>
          <Input
            {...register('postCode', {
              required: 'Почтовый индекс обязателен',
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'Почтовый индекс должен содержать 6 цифр',
              },
              onChange: () => trigger('postCode'),
            })}
            className={`${s.input} ${errors.postCode ? s.inputError : ''}`}
          />
          {errors.postCode && <span className={s.error}>{String(errors.postCode.message)}</span>}
        </div>
      </div>
      <div className={`${s.inputRow} df aic`}>
        <div className={`df fdc`}>
          <h4>Почта</h4>
          <Input
            placeholder="example@mail.com"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Введите корректный email',
              },
              onChange: () => trigger('email'),
            })}
            className={`${s.input} ${errors.email ? s.inputError : ''}`}
          />
          {errors.email && <span className={s.error}>{String(errors.email.message)}</span>}
        </div>
      </div>
      <div className={`${s.inputRow} df aic`}>
        <div className={`df fdc`}>
          <h4>Номер телефона</h4>
          <Input
            {...register('phone', {
              required: 'Номер телефона обязателен',
              pattern: {
                value: /^\+7[0-9]{10}$/,
                message: 'Введите номер в формате +7XXXXXXXXXX',
              },
              validate: value =>
                (typeof value === 'string' && value.startsWith('+7')) || 'Номер должен начинаться с +7',
              onChange: () => trigger('phone'),
            })}
            placeholder="+7XXXXXXXXXX"
            className={`${s.input} ${errors.phone ? s.inputError : ''}`}
          />
          {errors.phone && <span className={s.error}>{String(errors.phone.message)}</span>}
        </div>
      </div>
      {isRegistration && <Button>Зарегистрироваться</Button>}
    </form>
  )
}
