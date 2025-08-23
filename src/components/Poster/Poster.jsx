import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import infoIcon from '../../assets/info_icon.png'
import { FaPlay } from "react-icons/fa";
import './poster.css'
import { logout } from '../../firebase';
import { Link } from 'react-router-dom'
import { useContext } from "react"
import DataContext from '../../Context/DataContext'


const Poster = () => {
   const { signOut, setSignOut } = useContext(DataContext)

  return (
    <>
      <div className="poster-container">
        <img src={heroBanner} alt="Hero Banner" className="hero-banner" />
        <div className="poster-informations">
          <img src={heroTitle} className="hero-title" />
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks
            on a quest to save the city from a powerful immortal enemy.
          </p>
          <div className="btns-info-container">
            <button className="play-btn"><FaPlay /><span>Play</span></button>
            <button className="more-info">
              <img src={infoIcon} />
              <span style={{ color: "white" }}>More Info</span>
            </button>
          </div>
        </div>
      </div>
      <Link to="/authPage" className="style-link">
        <div className={`signOut-btn-${signOut ? "change-btn" : " "} `}
          onClick={() => logout()}
            onMouseOver={() => {
                setSignOut(false)
              }}
              onMouseLeave={() => {
                setSignOut(true)
              }}
        >
          <p>sign Out of Netflix</p>
        </div>
      </Link>
    </>
  )
}

export default Poster