import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import './videoPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const VideoPage = () => {
  const { id } = useParams()
  const [apiData, setApiData] = useState([])
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDNjNDY0YTIzZDQ4ZTI4MThiYzg0NmVmYzIyZWE3OCIsIm5iZiI6MTc1NTYyMDM5Ny44NTc5OTk4LCJzdWIiOiI2OGE0YTQyZGMxNTFlNGZhM2E4MzQ1NTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6u3Wt3WY6kiJ5ADAoxwnRz5sF5oFnkguCsOzGuUAQdc"
    }
  }

  useEffect(() => {
    const APIcall = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options)

        setApiData(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
    APIcall()
    console.log(apiData)

  }, [])


  const videoId = apiData.find((video) => video.type === "Trailer")
  const video = videoId ? videoId.key : null
  const publishedAt = videoId ? videoId.published_at : null
  const type = videoId ? videoId.type : null

  return (
    <>
      <div className="video-page-main-container">
        <div className="video-page-container">
          <Link to="/" className="style-btn">
            <div className="back-btn">
              <FaArrowLeft className="back-icon" />
            </div>
          </Link>
          <iframe
            src={`https://www.youtube.com/embed/${video}`}
            title="Video Thumbnail"
            className="video-player">
          </iframe>
        </div >
        <div className="video-page-footer">
       <div>{publishedAt ? publishedAt.slice(0, 10) : ""}</div>

          <div>Official Trailer[Subtitled]</div>
          <div>{type}</div>
        </div>
      </div>
    </>
  )
}

export default VideoPage