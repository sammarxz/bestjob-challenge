import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Types } from '../../state/action'
import { useGame } from '../../state/context'

import { randomInt, rules } from '../../utils'

import { Choice } from '../../components/'

import styles from './styles.module.css'

const Game = () => {
  const {
    state: { pcChoice, userChoice, result, winner },
    dispatch
  } = useGame()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: Types.pc,
        payload: {
          choice: rules[randomInt(rules.length)].value
        }
      })
    }, 2000)

    return () => {
      dispatch({
        type: Types.reset
      })
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (pcChoice) {
      console.log('chamando')
      dispatch({
        type: Types.play,
        payload: {
          userChoice: userChoice,
          pcChoice: pcChoice
        }
      })
      setLoading(false)
    }
  }, [pcChoice])

  if (!userChoice) {
    return <Redirect to="/" />
  }

  return (
    <div className="flex gap-2 md:gap-6">
      <div className="w-1/3 text-center">
        <h2 className="text-2xl mb-4">Your Choice</h2>
        <Choice
          type={userChoice}
          className={`${
            styles.choice
          } flex items-center justify-center text-5xl ${
            loading && styles.loading
          }
          ${winner === 'user' && 'border-green-500'}
          `}
        />
      </div>
      <div className="w-1/3 text-center flex flex-col items-center justify-center">
        {result && (
          <>
            <h3 className="text-lg md:text-4xl mt-11 mb-2 md:mb-4 font-bold uppercase">
              {result}!
            </h3>
            <Link to="/">
              <button className="p-2 md:px-6 md:py-2 rounded bg-green-500 hover:bg-green-600 text-white duration-300">
                Play Again
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="w-1/3 text-center">
        <h2 className="text-2xl mb-4">PC&apos;s Choice</h2>
        <Choice
          type={loading ? 'hand' : pcChoice}
          className={`${
            styles.choice
          } flex items-center justify-center text-5xl ${
            loading && styles.loading
          }
          ${winner === 'pc' && 'border-green-500'}
          `}
        />
      </div>
    </div>
  )
}

export { Game }
