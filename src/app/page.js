import { About, Banner } from '../../components'
import Appointments from '../../components/Appointments'
import Blog from '../../components/Blog'
import Contact from '../../components/Contact'
import Facility from '../../components/Facility'
import Faqs from '../../components/Faqs'
import Services from '../../components/Services'
import Testimonial from '../../components/Testimonial'
import Works from '../../components/Works'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Facility></Facility>
      <About></About>
      <Services></Services>
      <Appointments></Appointments>
      <Works></Works>
      <Faqs></Faqs>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Contact>
      </Contact>
    </main>
  )
}
