import React from 'react'
import { Link } from 'react-router-dom'

import { useGame } from '../../state/context'
import { Types } from '../../state/action'

import { rules } from '../../utils'

import { Choice } from '../../components'

import styles from './styles.module.css'

const Home = () => {
  const { dispatch } = useGame()

  return (
    <>
      <h2 className="text-3xl mb-8 text-center">What&apos;s your choice?</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {rules.map(({ value }) => (
          <Link key={value} to="/game">
            <button
              data-name={value}
              className={styles.item}
              onClick={() =>
                dispatch({
                  type: Types.user,
                  payload: {
                    choice: value
                  }
                })
              }
            >
              <Choice type={value} />
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}

export { Home }
