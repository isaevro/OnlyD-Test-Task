import * as S from './styles'

export interface InputTextProps {
  type?: 'email' | 'password'
  placeholder: string
}

const InputTextComponent = (props: InputTextProps) => {
  const { type = 'text', placeholder } = props

  return (
    <S.InputText>
      <label>{placeholder}</label>
      <input type={type} placeholder={placeholder} />
    </S.InputText>
  )
}

export const TextInput = InputTextComponent
