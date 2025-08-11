import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // ✅ Use Tailwind styles

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="flex gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-20 animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-20 animate-spin" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind v4</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="mt-3">Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="mt-6 opacity-80">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
