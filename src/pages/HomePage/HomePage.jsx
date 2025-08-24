import Navbar from '../../components/Navbar/Navbar'
import Poster from '../../components/Poster/Poster'
import SlideCards from '../../components/SlidingCards/SlidingCards'
import Footer from '../../Footer/Footer'
import DataContext from '../../Context/DataContext'
import {useContext} from 'react'

const HomePage = ({ setLoading }) => {
     const {errorMessage, loading} = useContext(DataContext)
  return (
    <>
     {loading ? (<div className="loading">
          <div class="netflix-n">
    <div class="n-segment left-bar"></div>
    <div class="n-segment diagonal-bar"></div>
    <div class="n-segment right-bar"></div>
  </div>
    </div >) :
      ( errorMessage ? <div className="error"><div>{`Error: ${errorMessage}`}</div></div> :
        <main>
          <Navbar />
          <Poster />
          <SlideCards setLoading={setLoading} />
          <Footer />
        </main>) }
    </>
  )
}

export default HomePage