import { useState } from 'react'
import './Header.css'
import logo from './assets/logo.jpeg'

const navItems = [
  'Home',
  'À Propos',
  'Services',
  'Conseil',
  'Our team',
  'Aide financières',
  'RCSD',
  'Carrière',
  'Formulaire(s)',
  'Contact',
]

export default function Header() {
  const [active, setActive] = useState('Home')

  return (
    <header className="header">
      <img src={logo} alt="Cabinet Dentaire Logo" className="header-logo" />
      <h1 className="title">Cabinet Dentaire Lachine</h1>
      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-button${active === item ? ' active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
