import { ReactNode } from 'react'
import cls from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={cls.container}>{children}</div>
)
