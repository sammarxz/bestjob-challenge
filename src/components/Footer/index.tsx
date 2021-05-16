import React from 'react'

import styles from './styles.module.css'

const Footer = () => (
  <footer
    className={`${styles.footer} fixed w-full p-4 md:p-8 md:mt-0 flex align-center justify-between`}
  >
    <p className="hidden md:block">
      Created by{' '}
      <a
        href="https://sammarxz.com"
        target="_blank"
        rel="noreferrer"
        className="text-green-500 underline hover:text-green-600 duration-300"
      >
        @sammarxz
      </a>
      . See the code in{' '}
      <a
        href="https://github.com/sammarxz/bestjob-challenge"
        target="_blank"
        rel="noreferrer"
        className="text-green-500 underline hover:text-green-600 duration-300"
      >
        Github
      </a>
    </p>
    <a
      href="https://www.youtube.com/watch?v=x5Q6-wMx-K8"
      target="_blank"
      rel="noreferrer"
    >
      <button className="w-full md:w-auto hover:bg-gray-100 duration-300 px-6 py-2 border border-gray-100 rounded">
        Rules
      </button>
    </a>
  </footer>
)

export { Footer }
