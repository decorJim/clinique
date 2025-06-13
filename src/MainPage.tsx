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

  const homeParagraphs = [
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

  const adviceParagraphs = [
    "Avant la chirurgie, abstenez-vous de prendre de l’aspirine dix jours à l’avance et d’alcool dans les vingt-quatre heures précédentes. Signalez-nous tout changement à votre dossier médical. Prenez un repas et, si une sédation est prévue, assurez-vous qu’une personne responsable vous accompagne.",
    "Après l’intervention, mordez une compresse une trentaine de minutes pour contrôler le saignement et suivez la médication prescrite. Ne touchez pas la zone opérée et évitez toute succion pendant vingt-quatre heures, y compris l’usage d’une paille. Ne fumez pas durant cette période.",
    "Pour dormir, gardez la tête sur deux ou trois oreillers. Un léger saignement est normal; si la perte est plus abondante, mordez une compresse pliée ou un sachet de thé afin de favoriser la coagulation.",
    "Appliquez de la glace enveloppée d’une serviette humide pendant vingt minutes chaque heure durant les deux premiers jours. Après vingt-quatre heures, rincez-vous la bouche avec de l’eau salée (une cuillerée à thé de sel dans un verre d’eau) quatre fois par jour pendant une semaine.",
    "Optez pour une alimentation molle et tiède et évitez le surmenage ainsi que les exercices intenses pendant quarante-huit heures. Un gonflement ou des ecchymoses peuvent apparaître sans nécessiter de traitement. Les points de suture se résorberont d’eux-mêmes après environ une semaine.",
  ]

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <Header active={active} onChange={setActive} />
      {active === 'Home' && (
        <main className="content-card">
          <img src={logo} alt="Cabinet Dentaire Logo" className="card-logo" />
          {homeParagraphs.map((text, index) => (
            <div className="peek-container" key={index}>
              <p className="peek-text" style={{ animationDelay: `${index * 0.2}s` }}>{text}</p>
            </div>
          ))}
        </main>
      )}
      {active === 'Conseil' && (
        <main className="advice-card">
          {adviceParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </main>
      )}
    </div>
  )
}
