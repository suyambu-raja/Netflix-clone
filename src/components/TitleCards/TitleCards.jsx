import { useContext, useEffect, useRef, useState } from 'react'
import DataContext from '../../Context/DataContext'
import './titleCards.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TitleCards = ({ title, category, newClass }) => {
  const { cards, setCards } = useContext(DataContext)
  const navigate = useNavigate()
  const TitleCardsRef = useRef(null)
  const [apiData, setApiData] = useState([])

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
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options)

        setApiData(response.data.results)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
    APIcall()
    setCards(...apiData)

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
            <div className="card-container"  key={index}
              onClick={() => navigate(`/videoPage/${card.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} className="card-img" />
            </div>
          ))) : (<div className="no-cards">NO Cards</div>)}
        </div>
      </div>
    </div >

  )
}

export default TitleCards