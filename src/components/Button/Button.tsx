import cls from './Button.module.scss'

interface ButtonProps {
  children: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className={cls.button} onClick={onClick}>
      {children}
    </div>
  )
}
