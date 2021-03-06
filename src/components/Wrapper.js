import styled from 'styled-components'

const Wrapper = styled.main.attrs(props => ({
  role: !props.as ? 'main' : undefined,
  id: !props.as ? 'main-content' : undefined,
}))`
  position: relative;
  border-radius: 5px;
  width: 80%;
  word-wrap: break-word;
  background-color: var(--color-wrapperBackground);
  margin: 0px auto 30px auto;
  top: 30px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px var(--color-wrapperShadow);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
  @media (min-width: 2000px) {
    width: 60%;
    max-width: 60%
  }
`

export default Wrapper
