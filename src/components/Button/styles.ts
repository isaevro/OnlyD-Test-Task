import styled from 'styled-components'
interface StyledButtonProps {
  width: string
  buttonColor: string
  buttonTextColor: string
}
export const Button = styled.div<StyledButtonProps>`
  button {
    margin-top: 40px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.buttonTextColor};
    max-width: ${(props) => props.width};
    width: 100%;
    height: 60px;
    background: ${(props) => props.buttonColor};
    border-radius: 8px;
    border: none;
    cursor: pointer;
    &:disabled {
      background: #99a9ff;
    }
  }
`
