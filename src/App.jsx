import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="container">
        <header class="notification is-link shadow">
          <Nav />
        </header>

        <main class="notification shadow">
          <Outlet />
        </main>

        <footer class="notification is-link shadow">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
