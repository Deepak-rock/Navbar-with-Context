// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            {isDarkTheme ? (
              <div className="dark-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="icon"
                  alt="home"
                />
                <h1 className="dark-heading">Home</h1>
              </div>
            ) : (
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="icon"
                  alt="home"
                />
                <h1 className="light-heading">Home</h1>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
