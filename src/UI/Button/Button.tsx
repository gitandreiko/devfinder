import cls from './Button.module.scss'

interface ButtonProps {
  children: string
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cls.button}>
      {children}
    </button>
  )
}
