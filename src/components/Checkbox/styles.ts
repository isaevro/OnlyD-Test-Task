import styled from 'styled-components'

export const styledCheckbox = styled.div`
  text-align: left;
  label {
    font-size: 16px;
    line-height: 19px;
    color: #1f1f1f;
    font-weight: 400;
  }
  input {
    display: none;
  }
  span {
    position: relative;
    margin-left: 30px;
  }

  span::before {
    content: '';
    position: absolute;
    left: -30px;
    top: -1px;
    display: inline-block;
    border-radius: 4px;
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    outline: 1px solid black;
  }
  input:checked + span::before {
    background-color: #4a67ff;
    border: 3px solid white;
  }
`
