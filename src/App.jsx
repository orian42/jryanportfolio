import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
          <Nav />
        </header>

        <main>
          <p>Content goes here</p>
        </main>

        <footer>
          <p>Footer goes here</p>
        </footer>
      </div>
    </>
  )
}

export default App
