import * as S from './styles'

export const Checkbox = () => {
  return (
    <S.styledCheckbox>
      <label>
        <input type="checkbox" />
        <span>Запомнить пароль</span>
      </label>
    </S.styledCheckbox>
  )
}
