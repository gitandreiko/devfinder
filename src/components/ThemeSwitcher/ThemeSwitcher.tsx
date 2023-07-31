import { useState, useEffect } from 'react'
import cls from './ThemeSwitcher.module.scss'
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false)
  const themeText = isDark ? 'Light' : 'Dark'
  const ThemeIcon = isDark ? SunIcon : MoonIcon

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className={cls.themeSwitcher} onClick={() => setDark(!isDark)}>
      <span>
        {themeText} <ThemeIcon className={cls.icon} />
      </span>
    </div>
  )
}
