import { useContext } from 'react'
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { MyThemeContext } from '../../styles/themes/ThemeContext'

// icons
import { RiMoonClearFill, IoMdSunny } from 'react-icons/all'

const Header = () => {

  const { title } = useContext(ThemeContext)

  return (
    <MyThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Container>
          <h1>header</h1>

          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={<RiMoonClearFill color="#f1c40f" size="20" />}
            uncheckedIcon={<IoMdSunny color="#f1c40f" size="20" />}
            height={30}
            width={60}
            handleDiameter={30}
            offColor={'#222'}
            onColor={'#222'}
            activeBoxShadow={'0'}
            className="myToggle"
          />
        </Container>
      )}
    </MyThemeContext.Consumer>
  )
}

export default Header
