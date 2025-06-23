import { Package } from '@/shared/icons/Package'
import s from './index.module.scss'
import { Trophy } from '@/shared/icons/Trophy'
import { CreditCard } from '@/shared/icons/CreditCard'
import { Headphones } from '@/shared/icons/headphones'
import React from 'react'

interface IITem {
  title: string
  subtitle: string
  icon: React.ReactNode
}

const items: IITem[] = [
  {
    title: 'быстрая доставка',
    subtitle: 'Доставка по МСК за 24 часа',
    icon: <Package />,
  },
  {
    title: '24 часа на возврат',
    subtitle: '100% возврат по гарантии',
    icon: <Trophy />,
  },
  {
    title: 'защищенная оплата',
    subtitle: 'Твои данные защищены',
    icon: <CreditCard />,
  },
  {
    title: 'поддержка 24/7',
    subtitle: 'Помощь в любое время',
    icon: <Headphones />,
  },
]

const Divider = () => (
  <div
    style={{
      width: '1px',
      height: '80%',
      backgroundColor: 'var(--purple-color)',
      margin: '0 1vw',
    }}
  />
)

export const HomeInfo = () => {
  return (
    <div className={`${s.homeInfo} df aic jcsb`}>
      {items.map((item, id) => (
        <React.Fragment key={id}>
          <div className={`${s.info} df aic`}>
            {item.icon}
            <div className="df fdc jcsb">
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          </div>
          {id !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}
