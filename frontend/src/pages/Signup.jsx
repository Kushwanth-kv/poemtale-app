import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await registerUser(form)
    if (res.success) {
      alert('Registration successful!')
      navigate('/login')
    } else {
      alert('Error registering user.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input type="text" placeholder="Name"
          className="w-full p-2 border mb-4 rounded" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email"
          className="w-full p-2 border mb-4 rounded" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password"
          className="w-full p-2 border mb-4 rounded" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Sign Up</button>
      </form>
    </div>
  )
}
