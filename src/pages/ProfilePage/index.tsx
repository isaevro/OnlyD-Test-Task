import { FC } from 'react'
import { Button } from '../../components/Button'
import { Content } from './styles'

interface Props {
  onLogout: () => void
  userData: string
}

const ProfilePage: FC<Props> = ({ onLogout, userData }) => {
  return (
    <Content>
      <p>Здравствуйте, </p> <b>{userData}</b>
      <Button
        buttonTextColor={'black'}
        buttonColor={'#F5F5F5'}
        width={'200px'}
        onClick={onLogout}>
        Выйти
      </Button>
    </Content>
  )
}

export default ProfilePage
