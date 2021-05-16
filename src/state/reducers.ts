/* eslint-disable no-case-declarations */
import { GameState } from './state'
import { Types, GameActions } from './action'

import { rules } from '../utils'

export const gameReducer = (state: GameState, action: GameActions) => {
  switch (action.type) {
    case Types.user:
      return {
        ...state,
        userChoice: action.payload.choice
      }
    case Types.pc:
      return {
        ...state,
        pcChoice: action.payload.choice
      }
    case Types.increment:
      return { ...state, score: state.score + 1 }
    case Types.decrement:
      return { ...state, score: state.score - 1 }
    case Types.play:
      const { payload } = action
      const pcChoice = rules.filter((item) => {
        return item.value === payload.pcChoice
      })[0]

      if (pcChoice.beats.includes(payload.userChoice)) {
        return {
          ...state,
          result: 'lose',
          winner: 'pc',
          score: state.score - 1
        }
      } else if (pcChoice.value === payload.userChoice) {
        return {
          ...state,
          result: 'draw'
        }
      }

      return {
        ...state,
        result: 'win',
        winner: 'user',
        score: state.score + 1
      }
    case Types.reset:
      return {
        ...state,
        result: '',
        userChoice: '',
        pcChoice: '',
        winner: ''
      }
    default:
      return state
  }
}
