import { Link } from "react-router-dom";
import telegram from '../img/telegram.svg'
import whatsapp from '../img/whatsapp.svg'
import vk from '../img/vk.svg'
import logo7 from '../img/logo7.svg'

function NavBar() {
  return (
    <nav
      className="navbar navbar-shadow navbar-expand-lg navbar-end navbar-light fixed-top"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container">
        <div className="navbar-nav-wrap">
          <div className="navbar-brand-wrapper">
            <Link
              className="px-6"
              to="/"
              aria-label="Front"
            >
              <img
                className=""
                src={logo7}
                alt="Logo"
                style={{ height: "50px", width: "50px" }}
              />
            </Link>
            <a
              className="navbar-brand"
              href="http://t.me/russia21st"
              rel="noreferrer"
              target="_blank"
              aria-label="Front"
            >
              <img className="" src={telegram} alt="Logo" height="30px" />
            </a>
            <Link className="navbar-brand" to="/" aria-label="Front">
              <img className="" src={whatsapp} alt="Logo" height="30px" />
            </Link>
            <Link className="navbar-brand" to="/" aria-label="Front">
              <img className="" src={vk} alt="Logo" height="30px" />
            </Link>
          </div>
          <button
            type="button"
            className="navbar-toggler ms-auto"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavMenu"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navbarNavMenu"
          >
            <span className="navbar-toggler-default">
              <i className="bi-list" />
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x" />
            </span>
          </button>
          <nav className="navbar-nav-wrap-col collapse navbar-collapse" id="navbarNavMenu">
            <ul className="navbar-nav">
              {/* <li className="nav-item"> */}
              {/*  <a className="nav-link active" href="/index.html">Active</a> */}
              {/* </li> */}
              {/* <li className="nav-item dropdown"> */}
              {/*  <Link */}
              {/*    className="nav-link dropdown-toggle" */}
              {/*    to="/" */}
              {/*    id="dropdownSubMenu" */}
              {/*    role="button" */}
              {/*    data-bs-toggle="dropdown" */}
              {/*    aria-expanded="false" */}
              {/*  > */}
              {/*    Dropdown */}
              {/*  </Link> */}
              {/*  <div className="dropdown-menu" aria-labelledby="dropdownSubMenu" */}
              {/* style={{ minWidth: '230px' }}> */}
              {/*    <Link className="dropdown-item" to="index">Action</Link> */}
              {/*    <Link className="dropdown-item" to="index">Another action</Link> */}
              {/*    <div className="dropdown-divider" /> */}
              {/*    <Link className="dropdown-item" to="index">Something else here</Link> */}
              {/*  </div> */}
              {/* </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="projects">Проекты</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="news">Новости</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="volunteers">Волонтерам</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contacts">Контакты</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="join">Стать волонтером</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
