import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  // Render the page structure
  return (
    <>
      <div className="container">
        <header className="notification is-link shadow">
          <Nav />
        </header>

        <main className="notification shadow">
          <Outlet />
        </main>

        <footer className="notification is-link shadow">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
