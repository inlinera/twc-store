import { useState, useRef, useEffect } from 'react'
import s from './index.module.scss'

interface DropdownProps<T> {
  trigger: T
  items: {
    content: React.ReactNode
    onClick?: () => void
  }[]
  className?: string
}

export const Dropdown = <T extends React.ReactNode>({ trigger, items, className }: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (onClick?: () => void) => {
    onClick?.()
    setIsOpen(false)
  }

  return (
    <div className={`${s.dropdown} ${className || ''}`} ref={dropdownRef}>
      <div className={s.trigger} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
        <svg
          className={`${s.arrow} ${isOpen ? s.open : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`${s.content} ${isOpen ? s.open : ''}`}>
        {items.map((item, index) => (
          <div key={index} className={s.item} onClick={() => handleItemClick(item.onClick)}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}
