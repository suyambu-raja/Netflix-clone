import './slidingCards.css'
import TitleCards from '../TitleCards/TitleCards'


const SlidingCards = () => {

  return (
    <div>
      <div className="popular-on-netflix-cards">
        <TitleCards title="Popular on Netflix" category={"popular"} newClass={"for-popular"} />
      </div>
      <div className="more-slide-cards-container">
        <TitleCards title="Upcoming" category={"upcoming"} />
        <TitleCards title="Only on Netflix" category={"now_playing"} />
        <TitleCards title="Blockbuster Movies" category={"top_rated"} />
        <TitleCards title={"Top Pics for You"} category={"popular"} />

      </div>
    </div>
  )
}

export default SlidingCards