// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme ? (
            <nav className="dark-navbar">
              <div className="responsive-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="nav-icon"
                />
                <ul className="nav-item">
                  <li className="item">
                    <Link to="/" className="dark-item-link">
                      Home
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="/about" className="dark-item-link">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="button"
                  onClick={onClickTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme-icon"
                  />
                </button>
              </div>
            </nav>
          ) : (
            <nav className="light-navbar">
              <div className="responsive-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="nav-icon"
                />
                <ul className="nav-item">
                  <li className="item">
                    <Link to="/" className="light-item-link">
                      Home
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="/about" className="light-item-link">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="button"
                  onClick={onClickTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme-icon"
                  />
                </button>
              </div>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
