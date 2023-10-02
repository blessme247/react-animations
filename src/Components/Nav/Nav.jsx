import { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navContainer">
        <div className="navbar">
          <div className="logo">Blessme</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox Open" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="navOverlay"
          style={{ top: navOpen ? "0" : "-100%", transitionDelay: "0s" }}
        >
          <ul className="navLinks">
            <li className="navItem">
              <Link to="/" onClick={() => setNavOpen(!navOpen)} 
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.7s" : "0s",
              }}
              >
                Home
              </Link>
              <div className="navItemWrapper"></div>
            </li>

            <li className="navItem">
              <Link to="/buttons" onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
              >
                Buttons
              </Link>
              <div className="navItemWrapper"></div>
            </li>

            <li className="navItem">
              <Link to="/" onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.9s" : "0s",
              }}
              >
                About
              </Link>
              <div className="navItemWrapper"></div>
            </li>

            <li className="navItem">
              <Link
                to="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Contact
              </Link>
              <div className="navItemWrapper"></div>
            </li>
          </ul>

          <div className="navFooter">
            <div className="location"
            style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.1s" : "0s"
            }}
            >
              <span>Toronto, ON</span>
            </div>
            <div className="navSocialMedia">
              <ul>
                <li
                style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.2s" : "0s"
                }}
                >
                  <a href="#">Youtube</a>
                </li>
                <li
                style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.3s" : "0s"
                }}
                >
                  <a href="#">Instragram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
