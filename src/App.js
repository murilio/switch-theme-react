import { useCallback } from 'react'
import Header from './components/Header'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './hooks/usePersistedState'

import { MyThemeContext } from './styles/themes/ThemeContext'

const App = () => {

  const [ theme, setTheme ] = usePersistedState('theme', light.title)

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? dark.title : light.title)
  }, [theme, setTheme])

  const state = {
    toggleTheme: toggleTheme
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <MyThemeContext.Provider value={state}>
        <div className="App">
          <GlobalStyle />
          <Header />
        </div>
      </MyThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
