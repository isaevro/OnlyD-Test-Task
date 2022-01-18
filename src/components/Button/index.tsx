import * as S from './styles'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  width?: string
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const { disabled = false, width = 100, children, type = 'button' } = props

  return (
    <S.Button>
      <button type={type} disabled={disabled}>
        {children}
      </button>
    </S.Button>
  )
}
