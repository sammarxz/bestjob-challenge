type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  user = 'USER_CHOICE',
  pc = 'PC_CHOICE',
  increment = 'INCREMENT',
  decrement = 'DECREMENT',
  play = 'PLAY',
  reset = 'RESET'
}

type GamePayload = {
  [Types.user]: { choice: string }
  [Types.pc]: { choice: string }
  [Types.play]: { userChoice: string; pcChoice: string }
  [Types.increment]: undefined
  [Types.decrement]: undefined
  [Types.reset]: undefined
}

export type GameActions = ActionMap<GamePayload>[keyof ActionMap<GamePayload>]
