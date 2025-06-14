import './Header.css'
import logo from './assets/logo.jpeg'

interface HeaderProps {
  active: string
  onChange: (item: string) => void
}

const navItems = [
  'Home',
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
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Cabinet Dentaire Logo" className="header-logo" />
          <p className="tagline">Depuis 1978</p>
        </div>
        <h1 className="title">CABINETDENTAIRE.ca</h1>
      </div>
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
