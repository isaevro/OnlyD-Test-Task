import styled from 'styled-components'

export const InputText = styled.div`
  margin-bottom: 20px;
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
    color: #232323;
    &:focus {
      outline: #232323 1px solid;
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
