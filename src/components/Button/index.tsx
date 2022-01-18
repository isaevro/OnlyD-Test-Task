import * as S from './styles'

export interface ButtonProps {
  type?: string
  disabled?: boolean
  width: string
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const { disabled = false, width = 100, children, type } = props

  return <S.Button>{children}</S.Button>
}
