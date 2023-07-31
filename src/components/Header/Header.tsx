import { ThemeSwitcher } from 'components/ThemeSwitcher'

import cls from './Header.module.scss'

export const Header = () => (
  <div className={cls.header}>
    <div className={cls.logo}>devfinder</div>
    <ThemeSwitcher />
  </div>
)
