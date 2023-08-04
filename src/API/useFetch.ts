import { useState } from 'react'
import { extractLocalUser } from 'utils/extract'
import { isGithubUser } from 'utils/typeguards'
import { LocalGithubUser } from 'types'
import { defaultUser } from 'mock'
import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/'

// Custom hook for fetching user data
export const useFetch = () => {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchUser = async (username: string) => {
    setLoading(true)
    setError('')

    try {
      const url = BASE_URL + username
      const response = await axios.get(url)
      const user = response.data

      if (isGithubUser(user)) {
        setUser(extractLocalUser(user))
      } else {
        setUser(null)
      }
    } catch (error) {
      setError('User not found')
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, error, fetchUser }
}
