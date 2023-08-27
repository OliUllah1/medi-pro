import { About, Banner } from '../../components'
import Appointments from '../../components/Appointments'
import Contact from '../../components/Contact'
import Services from '../../components/Services'
import Works from '../../components/Works'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Contact></Contact>
      <About></About>
      <Services></Services>
      <Appointments></Appointments>
      <Works></Works>
    </main>
  )
}
