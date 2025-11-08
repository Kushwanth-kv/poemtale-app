import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await loginUser(form)
    if (res.token) {
      localStorage.setItem('token', res.token)
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-600">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <input type="email" placeholder="Email"
          className="w-full p-2 border mb-4 rounded" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password"
          className="w-full p-2 border mb-4 rounded" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Log In</button>
      </form>
    </div>
  )
}
