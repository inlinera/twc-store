import s from './index.module.scss'

type ButtonVariant = 'default' | 'outlined' | 'round'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children?: React.ReactNode
}

export const Button = ({ variant = 'default', children, ...props }: ButtonProps) => {
  return (
    <button className={`${s[variant]} ${props.className} df aic jcc`} {...props}>
      {children}
    </button>
  )
}
