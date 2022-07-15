import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar navbar-expand-lg navbar-end mb-3">
      <div className="container">
        <div className="navbar-nav-wrap">
          <div className="navbar-brand-wrapper">
            <a className="navbar-brand" href="/index.html" aria-label="Front">
              <img className="navbar-brand-logo" src="../assets/svg/logos/logo.svg" alt="Logo" />
            </a>
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
    </header>
  );
}

export default NavBar;
