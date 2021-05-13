import React from 'react'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <main className="container max-w-4xl mx-auto py-4">{children}</main>
)

export { Main }
