import backgroundImg from "../../assets/net_back.jpg";
import neflixLogo from '../../assets/logo.png'
import './signInPage.css'
import { useContext, useState } from 'react'
import DataContext from '../../Context/DataContext'
import { login, signup } from "../../firebase"
import loadingGif from '../../assets/netflix_spinner.gif'


const SignInPage = () => {
  const { authc, setAuthc, loading, setLoading } = useContext(DataContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const user_auth = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      setTimeout(async () => {
        if (authc === true) {
          await login(email, password)
        } else {
          await signup(name, email, password)
        }
        setLoading(false)
      }, 2000)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(true)
    }
  }


  return (
    <>{loading ? (<div className="loading">
          <div class="netflix-n">
    <div class="n-segment left-bar"></div>
    <div class="n-segment diagonal-bar"></div>
    <div class="n-segment right-bar"></div>
  </div>
    </div >) :
      (<div className="login-page-main-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <img src={neflixLogo} className="netflix-logo" />
        <div className="signIn-container" style={{ display: authc ? "block" : "none" }}>
          <div className="headline-for-signIn">
            Sign In
          </div>
          <form className="input-container-for-signIn" onSubmit={user_auth}>
            <input placeholder="Email" type="email" value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
            <input placeholder="Password" type="password" value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} required
            />
            <button className="signIn-btn"
              type="submit">Sign In</button>
          </form>
          <div className="footer-section-for-signIn">
            <div className="need-help-container">
              <div className="checkbox-container">
                <input type="checkbox"
                  className="remember-me-checkbox"
                  name="Remember me" />Remember
              </div>
              <span>Need Help?</span>
            </div>
            <div className="signUp-option">
              <span>New to Netflix?</span>
              <div
                onClick={() => setAuthc(false)}
              >Sign Up Now</div>
            </div>
          </div>
        </div>

        <div className="signUp-container signIn-container" style={{ display: !authc ? "block" : "none" }}>
          <div className="headline-for-signIn ">
            Sign Up
          </div>
          <form className="input-container-for-signIn" onSubmit={user_auth}>
            <input placeholder="Your name" type="text" value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
            />
            <input placeholder="Email" type="email" value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
            <input placeholder="Password" type="password" value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
            <button className="signIn-btn"
              type="submit">
              Sign Up
            </button>
          </form>
          <div className="footer-section-for-signIn">
            <div className="need-help-container">
              <div className="checkbox-container">
                <input type="checkbox"
                  className="remember-me-checkbox"
                  name="Remember me" />Remember
              </div>
              <span>Need Help?</span>
            </div>
            <div className="signUp-option">
              <span>Already have account?</span>
              <div
                onClick={() => setAuthc(true)}
              >Sign In Now</div>
            </div>
          </div>
        </div>
      </div>)
    }
    </>
  )
}


export default SignInPage
