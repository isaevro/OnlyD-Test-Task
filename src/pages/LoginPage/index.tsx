import * as S from './styles'
import { TextInput } from '../../components/TextInput'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { useState } from 'react'

const LoginPage = () => {
  const [errorFetch, setErrorFetch] = useState<string>('')
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = async (data: object) => {
    try {
      const res: any = await new Promise((resolve) =>
        setTimeout(resolve, 1000),
      ).then(() => data)
      const isSteveJobs =
        res.login === 'steve.jobs@example.com' && res.password === 'password'
      if (isSteveJobs) {
        console.log('test')
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
      {errorFetch && (
        <span>
          <p> {errorFetch}</p>
        </span>
      )}
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
        <Button type="submit" disabled={false}>
          Войти
        </Button>
      </form>
    </S.Content>
  )
}

export default LoginPage
