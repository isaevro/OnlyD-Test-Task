import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@font-face { 
  font-family: 'Helvetica Neue';
  src: url('fonts/HelveticaNeueCyr-Light.woff2');
  font-weight: 400;
  }
@font-face {   
  font-family: 'Helvetica Neue';
  src: url('fonts/HelveticaNeueCyr-Bold.woff2');
  font-weight: 700;
  }
*{
  margin: 0;
  text-align: center;
  padding: 0;
  box-sizing: border-box;
  background: white;
  font-family: 'Helvetica Neue', sans-serif;
}
`
