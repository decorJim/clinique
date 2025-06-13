import './Header.css'

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
  return (
    <header className="header">
      <h1 className="title">Cabinet Dentaire Lachine</h1>
      <nav className="nav">
        {navItems.map((item) => (
          <button key={item} className="nav-button">
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
