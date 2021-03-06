import { Header } from './components/Header'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Wrapper } from './styles/components'

function App() {
  const [userData, setUserData] = useState<string>('adwawd')
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true)
  let navigate = useNavigate()

  const onSuccessLogin = (user: string) => {
    setIsAuthorized(true)
    setUserData(user)
    navigate('/profile')
  }
  const onLogout = () => {
    setIsAuthorized(false)
    setUserData('')
    navigate('/')
  }
  const ProtactedRoutes = () => {
    return isAuthorized ? (
      <Outlet />
    ) : (
      <LoginPage onSuccessLogin={onSuccessLogin} />
    )
  }
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route element={<ProtactedRoutes />}>
            <Route
              path="/"
              element={<LoginPage onSuccessLogin={onSuccessLogin} />}
            />

            <Route
              path="/profile"
              element={<ProfilePage onLogout={onLogout} userData={userData} />}
            />
          </Route>
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
