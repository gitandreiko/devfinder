import { useState } from 'react'
import { Container } from 'UI/Container'
import { Search } from 'components/Search'
import { Header } from 'components/Header'
import { UserCard } from 'components/UserCard'
import { defaultUser } from 'mock'
import { GithubError, GithubUser, LocalGithubUser } from 'types'
import { extractLocalUser } from 'utils/extract'
import { isGithubUser } from 'utils/typeguards'
import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username

    const response = await axios.get(url)
    const user = response.data as GithubUser | GithubError

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
