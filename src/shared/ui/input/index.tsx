import s from './index.module.scss'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  endElement?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, endElement, ...otherProps } = props

  return (
    <div className={`${s.inputWrapper} df aic`}>
      <input ref={ref} className={`df aic ${className || ''}`} {...otherProps} />
      {endElement && <div className={`${s.endElement} df aic jcc`}>{endElement}</div>}
    </div>
  )
})
