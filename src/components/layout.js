import * as React from 'react'
import GlobalStyle from '../styles/GlobalStyles'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { NavBar, Head, Loader } from '@components'
import { useEffect, useState } from 'react'

const Layout = ({ location, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [location.hash]);

  return (
    <>
    <Head />
    <div id="root">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isLoading ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
            <NavBar />
            <div id="content">
              {children}
            </div>
            </>
          )
      }
    </ThemeProvider>
    </div>
    </>
  )
}

export default Layout