import React from 'react'

import { AppProvider } from './state/context'

import Routes from './routes'
import { Main, Header, Footer } from './components'

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </AppProvider>
  )
}

export default App
