import * as S from './styles'

export interface AllertProps {
  children: React.ReactNode
}

export const Allert = (props: AllertProps) => {
  const { children } = props

  return (
    <S.StyledAllert>
      <span>
        <p> {children} </p>
      </span>
    </S.StyledAllert>
  )
}
