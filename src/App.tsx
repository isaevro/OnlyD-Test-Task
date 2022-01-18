import styled from 'styled-components'
import { Header } from './components/Header'
import LoginPage from './pages/LoginPage'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <LoginPage />
    </AppWrapper>
  )
}

export default App
