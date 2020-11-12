import styled from 'styled-components'

export const Container = styled.div`
  height: 68px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .myToggle {
    .react-switch-bg {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
