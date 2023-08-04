import { FC } from 'react'
import { Container } from 'UI/Container'
import { Search } from 'components/Search'
import { Header } from 'components/Header'
import { UserCard } from 'components/UserCard'
import { Loader } from 'UI/Loader'
import { useFetch } from 'API/useFetch'

const App: FC = () => {
  const { user, loading, error, fetchUser } = useFetch()

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {loading && <Loader />}
      {error && <h1 className="error">{error}</h1>}
      {!loading && !error && user && <UserCard {...user} />}
    </Container>
  )
}

export default App
