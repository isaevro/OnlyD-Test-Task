import * as S from './styles'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  width?: string
  children: React.ReactNode
  onClick?: () => void
  buttonTextColor: string
  buttonColor: string
}

export const Button = (props: ButtonProps) => {
  const {
    onClick,
    buttonTextColor,
    buttonColor,
    disabled = false,
    width = '640px',
    children,
    type = 'button',
  } = props

  return (
    <S.Button
      buttonTextColor={buttonTextColor}
      buttonColor={buttonColor}
      width={width}>
      <button onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
    </S.Button>
  )
}
