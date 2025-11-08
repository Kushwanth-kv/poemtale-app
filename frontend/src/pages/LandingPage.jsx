import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-purple-800 text-white">
      <h1 className="text-6xl font-bold mb-6">PoemTale Diffusion</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Generate expressive poems and visualize emotions through the power of AI.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100">
          Log In
        </Link>
        <Link to="/signup" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
