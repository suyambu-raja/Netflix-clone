import { useEffect, useRef, useState, useContext } from 'react'
import './titleCards.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext from '../../Context/DataContext'

const TitleCards = ({ title, category, newClass }) => {
  const navigate = useNavigate()
  const TitleCardsRef = useRef(null)
  const [apiData, setApiData] = useState([])
  const { setErrorMessage, errorMessage, loading, setLoading } = useContext(DataContext)


  const handleWheel = (e) => {
    e.preventDefault()
    TitleCardsRef.current.scrollLeft += e.deltaY
  }
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDNjNDY0YTIzZDQ4ZTI4MThiYzg0NmVmYzIyZWE3OCIsIm5iZiI6MTc1NTYyMDM5Ny44NTc5OTk4LCJzdWIiOiI2OGE0YTQyZGMxNTFlNGZhM2E4MzQ1NTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6u3Wt3WY6kiJ5ADAoxwnRz5sF5oFnkguCsOzGuUAQdc"
    }
  };

  useEffect(() => {
    const APIcall = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options)
        setErrorMessage(false)
        setApiData(response.data.results)
      } catch (error) {
        setErrorMessage(error.message)
        console.log(errorMessage)
      } finally{
        setLoading(false)
      }
    };

    APIcall()

    TitleCardsRef.current.addEventListener('wheel', handleWheel)
  }, [])



  return (
    <div>
      <div className={`Title-cards-container`} id={`${newClass}`}>
        <div className="card-title">{title ? title : "Popular on Netflix"}</div>

        <div className="Title-cards"
          ref={TitleCardsRef}
        >
          {apiData.length ? (apiData.map((card, index) => (
            <div className="card-container" key={index}
              onClick={() => navigate(`/videoPage/${card.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} className="card-img" />
              <div>{card.title}</div>
            </div>
          ))) : (<div className="no-cards">NO Cards</div>)}
        </div>
      </div>
    </div >

  )
}

export default TitleCards