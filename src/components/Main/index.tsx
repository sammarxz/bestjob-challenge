import React from 'react'

import styles from './styles.module.css'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <div
    className={`${styles.wrapper} flex flex-col flex-wrap items-center justify-center`}
  >
    <main className="container max-w-4xl mx-auto px-4 md:px-8">{children}</main>
  </div>
)

export { Main }
