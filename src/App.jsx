import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

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
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
