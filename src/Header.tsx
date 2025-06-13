import './Header.css'
import logo from './assets/logo.jpeg'

interface HeaderProps {
  active: string
  onChange: (item: string) => void
}

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

export default function Header({ active, onChange }: HeaderProps) {

  return (
    <header className="header">
      <img src={logo} alt="Cabinet Dentaire Logo" className="header-logo" />
      <h1 className="title">Cabinet Dentaire Lachine</h1>
      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-button${active === item ? ' active' : ''}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
