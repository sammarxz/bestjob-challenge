import React, { createContext, useReducer, Dispatch, useContext } from 'react'

import { GameState, initialGameState } from './state'
import { gameReducer } from './reducers'

import { GameActions } from './action'

const AppContext = createContext<{
  state: GameState
  dispatch: Dispatch<GameActions>
}>({
  state: initialGameState,
  dispatch: () => null
})

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

const useGame = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useGame must be used inside a AppContext')
  }

  return context
}

export { AppProvider, AppContext, useGame }
