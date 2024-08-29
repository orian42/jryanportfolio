import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <Nav />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <p>Footer goes here</p>
        </footer>
      </div>
    </>
  )
}

export default App
