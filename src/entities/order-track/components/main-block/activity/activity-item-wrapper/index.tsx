import s from './index.module.scss'

export interface ActivityItemProps {
  color: 'green' | 'blue'
  svg: React.ReactNode
  title: string
  date: string
}

export const ActivityItem = ({ color = 'blue', svg, title, date }: ActivityItemProps) => {
  return (
    <div className={`${s.item} df aic`}>
      <div className={`${s.svg} ${color === 'blue' ? s.blue : s.green} df aic jcc`}>{svg}</div>
      <div className={`${s.meta} df fdc`}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  )
}
