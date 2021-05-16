import React from 'react'

import { useGame } from '../../state/context'

import styles from './styles.module.css'

const Header = () => {
  const {
    state: { score }
  } = useGame()

  return (
    <header className="fixed w-full p-4 md:p-8 md:pb-0 flex align-center justify-between">
      <a href="/">
        <h1 className={styles.logo}>
          <img
            src="./images/spock.png"
            alt="Spock. a character in the Star Trek media franchise"
            className={styles.logo}
            aria-label="Spock. a character in the Star Trek media franchise"
          />
          <span
            className={`${styles.logo} font-semibold border border-gray-200	p-2 rounded-sm`}
          >
            Live long and prosper
          </span>
        </h1>
      </a>

      <h2 className="uppercase text-lg">
        Score: <span className="font-bold">{score}</span>
      </h2>
    </header>
  )
}

export { Header }
