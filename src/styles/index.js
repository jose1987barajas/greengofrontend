import styled, {createGlobalStyle} from 'styled-components'

// Estos estilos se aplican globales y no por componente
export default createGlobalStyle`
  body{
    margin: 0;
  }
`

export const Nav = styled.nav`
  height: 8vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    color: #232323;
  }
`
export const Form = styled.form`
  width: 100vw;
  height: 100vh;
  input[type='text'] {
    border: none;
    width: 100%;
    height: 8vh;
    font-size: 1.2rem;
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  input::placeholder {
    color: #323232;
    font-size: 1.2rem;
  }
  input:focus {
    outline: none;
  }
  img {
    width: 100%;
  }
`

export const StyledPosts = styled.section`
  display: flex;
  flex-direction: column;
`

export const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    h2 {
      margin: 0;
      font-size: 1rem;
    }
  }
  & small {
    font-weight: 600;
  }
`
