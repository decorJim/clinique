import Header from './Header'
import './MainPage.css'
import logo from './assets/logo.jpeg'

export default function MainPage() {
  const paragraphs = [
    `Le CABINETDENTAIRE.ca se positionne comme un centre dentaire qui offre des soins professionnels, accompagnés d’une technologie de pointe qui a fait ses preuves. Une équipe multidisciplinaire nous permet d’offrir une grande gamme de services dentaires au sein même de notre clinique dentaire de Lachine, à Montréal, un avantage indéniable qui évite les déplacements et le transfert de dossiers. Nous préconisons la prévention et la santé dentaire à long terme.`,
    `Notre but est de vous offrir un beau sourire radieux et durable. Le CABINETDENTAIRE.ca forme une grande famille de professionnels dentaires qui ont à cœur le bien-être et la santé de leurs patients. Nous faisons tout en notre capacité pour vous faire vivre une expérience des plus agréables.`,
    `Les chirurgiens-dentistes utilisent les technologies récentes, mais qui ont fait leurs preuves; notamment, les restaurations très durables en céramique (CEREC), des lasers diagnostics et chirurgicaux, la radiologie numérique pour moins de radiations et plus de précisions. Une équipe de chirurgiens-dentistes au service de votre dentition depuis 1978.`,
    `Notre mission: améliorer la santé bucco-dentaire générale de la population, par des soins professionnels et en mettant la meilleure technologie au service des patients. La dentisterie a énormément évolué au cours des dernières années.`,
    `De plus, au CABINETDENTAIRE.ca, vous pouvez être servi en français, anglais, espagnol, portugais, russe, polonais et roumain.`,
  ]

  return (
    <>
      <Header />
      <main className="content-card">
        <img src={logo} alt="Cabinet Dentaire Logo" className="card-logo" />
        {paragraphs.map((text, index) => (
          <div className="peek-container" key={index}>
            <p className="peek-text" style={{ animationDelay: `${index * 0.2}s` }}>{text}</p>
          </div>
        ))}
      </main>
    </>
  )
}
