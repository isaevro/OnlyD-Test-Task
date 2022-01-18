import * as S from './styles'

export interface InputTextProps {
  type: 'text' | 'password'
  placeholder: string
  register: (type: string, obj: object) => void
  errors: any
  disabled?: boolean
}

const InputTextComponent = (props: InputTextProps) => {
  const { type, placeholder, register, errors } = props
  console.log(errors)
  return (
    <S.InputText errors={errors}>
      <label>{placeholder}</label>
      <input
        {...register(type === 'text' ? 'login' : 'password', {
          required: 'Обязательное поле',
        })}
        type={type}
        placeholder={placeholder}
      />
      {errors && <p>{errors.message}</p>}
    </S.InputText>
  )
}

export const TextInput = InputTextComponent
