import { CSSProperties, useEffect, useState } from 'react'
import Header from './Header'
import './MainPage.css'
import logo from './assets/logo.jpeg'
import background1 from './assets/background 1.jpeg'
import background2 from './assets/background 2.png'

export default function MainPage() {
  const [active, setActive] = useState('Home')
  const [loaded, setLoaded] = useState(false)
  const [background, setBackground] = useState(background1)
  const [fadeImage, setFadeImage] = useState<string | null>(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (active === 'Services') {
      setFadeImage(background2)
      const timer = setTimeout(() => {
        setBackground(background2)
        setFadeImage(null)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setBackground(background1)
    }
  }, [active])

  const paragraphs = [
    `Le CABINETDENTAIRE.ca se positionne comme un centre dentaire qui offre des soins professionnels, accompagnés d’une technologie de pointe qui a fait ses preuves. Une équipe multidisciplinaire nous permet d’offrir une grande gamme de services dentaires au sein même de notre clinique dentaire de Lachine, à Montréal, un avantage indéniable qui évite les déplacements et le transfert de dossiers. Nous préconisons la prévention et la santé dentaire à long terme.`,
    `Notre but est de vous offrir un beau sourire radieux et durable. Le CABINETDENTAIRE.ca forme une grande famille de professionnels dentaires qui ont à cœur le bien-être et la santé de leurs patients. Nous faisons tout en notre capacité pour vous faire vivre une expérience des plus agréables.`,
    `Les chirurgiens-dentistes utilisent les technologies récentes, mais qui ont fait leurs preuves; notamment, les restaurations très durables en céramique (CEREC), des lasers diagnostics et chirurgicaux, la radiologie numérique pour moins de radiations et plus de précisions. Une équipe de chirurgiens-dentistes au service de votre dentition depuis 1978.`,
    `Notre mission: améliorer la santé bucco-dentaire générale de la population, par des soins professionnels et en mettant la meilleure technologie au service des patients. La dentisterie a énormément évolué au cours des dernières années.`,
    `De plus, au CABINETDENTAIRE.ca, vous pouvez être servi en français, anglais, espagnol, portugais, russe, polonais et roumain.`,
  ]

  let wrapperStyle: CSSProperties = {
    '--background-image': `url(${background})`,
  } as CSSProperties
  if (fadeImage) {
    wrapperStyle = {
      ...wrapperStyle,
      '--fade-image': `url(${fadeImage})`,
    } as CSSProperties
  }

  const wrapperClass = `page-wrapper${
    loaded && active === 'Home' ? ' reveal' : ''
  }${fadeImage ? ' fading' : ''}`

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <Header active={active} onChange={setActive} />
      <main className="content-card">
        <img src={logo} alt="Cabinet Dentaire Logo" className="card-logo" />
        {paragraphs.map((text, index) => (
          <div className="peek-container" key={index}>
            <p className="peek-text" style={{ animationDelay: `${index * 0.2}s` }}>{text}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
