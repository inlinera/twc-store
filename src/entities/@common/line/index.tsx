import s from './index.module.scss'

interface ILineItem {
  content: React.ReactNode | string
  isGreen?: boolean
}

interface ILineProps {
  items: ILineItem[]
}

export const Line = ({ items }: ILineProps) => {
  return (
    <div className={s.line} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
      {items.map((item, id) => (
        <div className={`${s.item} ${item.isGreen ? s.green : ''}`} key={id}>
          {item.content}
        </div>
      ))}
    </div>
  )
}
