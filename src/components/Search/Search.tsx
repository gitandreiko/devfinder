import { useState } from 'react'
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import { Button } from 'UI/Button'

import cls from './Search.module.scss'

interface SearchProps {
  hasError: boolean
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault()

    if (searchQuery) {
      onSubmit(searchQuery)
    }

    setSearchQuery('')
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={cls.search}>
        <label htmlFor="search" className={cls.label}>
          <SearchIcon />
        </label>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className={cls.textField}
          id="search"
          name="username"
          placeholder="Search for a GitHub username..."
        />
        {hasError && <div className={cls.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
