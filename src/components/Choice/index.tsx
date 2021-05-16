import React from 'react'

type ChoiceProps = {
  type: string | 'lizard' | 'paper' | 'rock' | 'scissor' | 'spock'
  className?: string
}

const Choice = ({ type, className }: ChoiceProps) => {
  function renderIcon() {
    switch (type) {
      case 'lizard':
        return '🦎'
      case 'paper':
        return '📄'
      case 'rock':
        return '🪨'
      case 'scissor':
        return '✂️'
      case 'spock':
        return '🖖'
      default:
        return '🤔'
    }
  }

  return (
    <div
      className={`bg-white text-4xl border border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl duration-300 ${
        className && className
      }`}
    >
      {renderIcon()}
    </div>
  )
}

export { Choice }
