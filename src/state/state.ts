export type GameState = {
  score: number
  userChoice: string
  pcChoice: string
  result: '' | 'win' | 'lose' | 'draw'
  winner: '' | 'user' | 'pc'
}

export const initialGameState: GameState = {
  score: 0,
  userChoice: '',
  pcChoice: '',
  result: '',
  winner: ''
}
