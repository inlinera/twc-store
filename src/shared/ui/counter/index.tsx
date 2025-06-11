import s from './index.module.scss'
import { useEffect } from 'react'

interface CounterProps {
  maxValue: number
  value: number
  onChange: (value: number) => void
}

export const Counter = ({ maxValue, value, onChange }: CounterProps) => {
  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < maxValue) {
      onChange(value + 1)
    }
  }

  useEffect(() => {
    if (value > maxValue) {
      onChange(maxValue)
    }
  }, [maxValue, value, onChange])

  return (
    <div className={s.counter}>
      <button className={s.button} onClick={handleDecrement} disabled={value === 0}>
        -
      </button>
      <span className={s.value}>{value}</span>
      <button className={s.button} onClick={handleIncrement} disabled={value === maxValue}>
        +
      </button>
    </div>
  )
}
