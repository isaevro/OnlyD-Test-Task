import * as S from './styles'
import { TextInput } from '../../components/TextInput'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { FC, useState } from 'react'
import { Checkbox } from '../../components/Checkbox'
import { Allert } from '../../components/Allert'

interface Props {
  onSuccessLogin: (name: string) => void
}

const LoginPage: FC<Props> = ({ onSuccessLogin }) => {
  const [errorFetch, setErrorFetch] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = async (data: object) => {
    try {
      setDisabledButton(true)
      const res: any = await new Promise((resolve) =>
        setTimeout(resolve, 1000),
      ).then(() => data)
      const isSteveJobs =
        res.login === 'steve.jobs@example.com' && res.password === 'password'
      setDisabledButton(false)
      if (isSteveJobs) {
        onSuccessLogin(res.login)
      } else {
        throw new Error(
          res.login === 'steve.jobs@example.com'
            ? 'Неверный пароль'
            : `Пользователя ${res.login} не существует`,
        )
      }
    } catch (err: any) {
      setErrorFetch(err.message)
    }
  }
  return (
    <S.Content>
      {errorFetch && <Allert>{errorFetch}</Allert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          errors={errors.login}
          placeholder={'Логин'}
          type={'text'}
          register={register}
        />
        <TextInput
          errors={errors.password}
          placeholder={'Пароль'}
          type={'password'}
          register={register}
        />
        <Checkbox />
        <Button
          buttonColor={'#4A67FF'}
          buttonTextColor={'white'}
          type="submit"
          disabled={disabledButton}>
          Войти
        </Button>
      </form>
    </S.Content>
  )
}

export default LoginPage
