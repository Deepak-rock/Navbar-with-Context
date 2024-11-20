// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            {isDarkTheme ? (
              <div className="dark-notfound-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="icon"
                  alt="not found"
                />
                <h1 className="dark-heading">Lost Your Way?</h1>
                <p className="dark-text">We cannot seem to find the page.</p>
              </div>
            ) : (
              <div className="light-notfound-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="icon"
                  alt="not found"
                />
                <h1 className="light-heading">Lost Your Way?</h1>
                <p className="light-text">We cannot seem to find the page.</p>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
