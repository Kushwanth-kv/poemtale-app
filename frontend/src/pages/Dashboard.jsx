import { useEffect, useState } from 'react'
import { getDashboardData } from '../api'

export default function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getDashboardData(token).then(setData)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Dashboard</h1>
      {data ? (
        <pre className="bg-white p-4 rounded shadow-md">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading your personalized poem data...</p>
      )}
    </div>
  )
}
