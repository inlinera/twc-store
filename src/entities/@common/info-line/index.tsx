import s from './index.module.scss'

interface IInfoLineItem {
  icon: React.ReactNode
  title: string
  subtitle: string
}

interface IInfoLineProps {
  items: IInfoLineItem[]
  itemsContentAlign?: 'center' | 'start'
  dividerColor?: string
}

export const InfoLine = ({
  items,
  dividerColor = 'var(--light-gray-color)',
  itemsContentAlign = 'start',
}: IInfoLineProps) => {
  return (
    <div
      className={`${s.infoLine} dg aic`}
      style={{
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        ...((dividerColor ? { '--divider-color': dividerColor } : {}) as React.CSSProperties),
      }}
    >
      {items.map((item, id) => (
        <div className={`${s.item} df aic ${itemsContentAlign === 'center' ? 'jcc' : ''}`} key={id}>
          {item.icon}
          <div className={`${s.content} df fdc`}>
            <b>{item.title}</b>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
