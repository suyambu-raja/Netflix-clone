import './navbar.css'
import netflixLogo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImage from '../../assets/profile_img.png'
import downArrow from '../../assets/caret_icon.svg'
import { useContext, useRef, useEffect } from "react"
import DataContext from '../../Context/DataContext'


const Navbar = () => {
  const { signOut, setSignOut } = useContext(DataContext)
  const navbarRef = useRef(null)

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbarRef.current.style.background = "rgb(0,0,0,0.75)"
        navbarRef.current.style.transition = "0.3s"
      } else {
        navbarRef.current.style.background = "transparent"
      }
    })

  }, [])

  return (
    <div className="navbar-container"
      ref={navbarRef}
    >
      <ul className="navbar">
        <li className="navbar-logo">
          <img src={netflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </li>
        <li className="navbar-components-list">
          <div>Home</div>
          <div>TvShows</div>
          <div>Movies</div>
          <div>New & Popular</div>
          <div>My List</div>
          <div>Browse by Languages</div>
        </li>
        <li className="navbar-icons">
          <div className="search-bar-icon">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </div>
          <div className="navbar-user-name">Children</div>
          <div className="bell-icon">
            <img src={bellIcon} alt="Bell Icon" className="bell-icon-img" />
          </div>
          <div className="navbar-profile"
            onMouseOver={(e) => {
              e.preventDefault()
              setSignOut(false)
            }}
            onMouseLeave={(e) => {
              e.preventDefault()
              setSignOut(true)
            }}
            onClick={(e) => {
              e.preventDefault()
              let changeState = signOut ? false : true
              setSignOut(changeState)
            }}

          >
            <img src={profileImage} alt="Profile" className="profile-image" />
            <img src={downArrow} alt="Down Arrow" className="down-arrow-icon"

            />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
