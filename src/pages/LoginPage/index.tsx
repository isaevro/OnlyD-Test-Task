import * as S from './styles'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'

const LoginPage = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <form>
          <TextInput placeholder={'Логин'} />
          <TextInput placeholder={'Пароль'} type={'password'} />
          <Button width={'640px'} type={'submit'}>
            Войти
          </Button>
        </form>
      </S.Content>
    </S.Wrapper>
  )
}

export default LoginPage
