import styled from 'styled-components'
interface StyledInputTextProps {
  errors: object
}

export const InputText = styled.div<StyledInputTextProps>`
  margin-bottom: 20px;
  p {
    margin-top: 8px;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #e26f6f;
  }
  input {
    display: block;
    width: 100%;
    height: 60px;
    text-align: left;
    background: #f5f5f5;
    border-radius: 8px;
    font-weight: normal;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.errors ? 'red' : '#232323')};
    &:focus {
      outline: ${(props) => (props.errors ? 'red' : '#232323')} 1px solid;
    }
  }
  label {
    text-align: left;
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 10px;
    color: #1f1f1f;
  }
`
