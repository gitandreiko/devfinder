import { FC } from 'react'
import { Container } from 'UI/Container'
import { Search } from 'components/Search'
import { Header } from 'components/Header'
import { UserCard } from 'components/UserCard'

import { useFetch } from 'API/useFetch'

const App: FC = () => {
  const { user, loading, error, fetchUser } = useFetch()

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
