import styled from 'styled-components'

export const StyledAllert = styled.div`
  span {
    top: -90px;
    left: 0;
    position: absolute;
    display: inline-block;
    width: 100%;
    max-width: 640px;
    height: 60px;
    background: #f5e9e9;
    border: 1px solid #e26f6f;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 20px;
    p {
      text-align: left;
      background: transparent;
      margin-top: 20px;
      margin-left: 50px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      position: relative;
      &:before {
        content: url(./img/error.png);
        position: absolute;
        left: -32px;
        top: -2px;
      }
    }
  }
`
