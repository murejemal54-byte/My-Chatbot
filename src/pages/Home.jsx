import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      try {
        // Adjust endpoint to your API server or to server/ routes
        const res = await axios.get('/api/example') 
        if (mounted) setItems(res.data)
      } catch (err) {
        if (mounted) setError(err)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <>
      <Helmet>
        <title>Qalaca — Home</title>
      </Helmet>
      <main className="container">
        <h1>Welcome to Qalaca</h1>
        <ul>
          {items && items.map((it) => (
            <li key={it.id}>
              <Link to={`/items/${it.id}`}>{it.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
          }
