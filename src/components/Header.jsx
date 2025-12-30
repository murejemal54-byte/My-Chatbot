import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">Qalaca</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
