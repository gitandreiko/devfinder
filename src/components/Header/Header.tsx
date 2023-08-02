import { ThemeSwitcher } from 'components/ThemeSwitcher'

import cls from './Header.module.scss'

export const Header = () => (
  <div className={cls.header} onClick={() => document.location.reload()}>
    <div className={cls.logo}>devfinder</div>
    <ThemeSwitcher />
  </div>
)
