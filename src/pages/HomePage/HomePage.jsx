import Navbar from '../../components/Navbar/Navbar'
import Poster from '../../components/Poster/Poster'
import SlideCards from '../../components/SlidingCards/SlidingCards'
import Footer from '../../Footer/Footer'

const HomePage = ({setLoading}) => {
  return (
    <main>
      <Navbar />
      <Poster />
      <SlideCards setLoading={setLoading} />
      <Footer />
    </main>
  )
}

export default HomePage