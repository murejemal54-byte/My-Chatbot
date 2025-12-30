import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Qalaca</title>
      </Helmet>
      <main className="container">
        <h1>About Qalaca</h1>
        <p>This app was migrated from Next.js to React + Vite.</p>
      </main>
    </>
  )
}
