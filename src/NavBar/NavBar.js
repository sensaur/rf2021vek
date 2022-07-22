import { Link } from "react-router-dom";
import telegram from '../img/telegram.svg'
import whatsapp from '../img/whatsapp.svg'
import vk from '../img/vk.svg'

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                viewBox="0 0 13974.17 16851.55"
                width="50"
                height="50"
              >
                <path fill="#1D1D53" d="M6733.47 13961.4l1.52 -792.7c-950.08,-92.58 -1669.33,-224.17 -2433.93,-615.17 -736.56,-383.56 -1318.46,-790.97 -1772.51,-1294.26 -251.85,-279.16 -440.22,-483.12 -679.21,-837.13 -191.03,-282.97 -389.87,-638.07 -536.49,-980.67 -325.53,-760.58 -526.38,-1622.48 -507.15,-2575.5 67.21,-3330.73 2794.68,-6063.54 6186.66,-6064.46 3350.23,-0.91 6113.6,2716.38 6178.44,6029.23 37.37,1909.56 -765.28,3453.97 -1701.42,4406.32 -1144.05,1163.83 -2478.31,1822.7 -4242.5,1934.23l3.26 789.78c1617.47,54.77 3762.74,-946.43 4795.69,-2132.44 1262.29,-1393.2 1959.07,-2909.56 1948.22,-4962.82 -19.85,-3758.66 -3175.76,-6866.99 -6981.67,-6865.81 -3867.24,1.21 -6911.29,3094.09 -6990.78,6866 -60.25,2858.97 1609.69,5377.15 3957.46,6418.01 697.47,326.25 1891,701.02 2774.42,677.38z" />
                <path fill="#377DFF" d="M2368.41 7234.79l-3.63 -298.74 866.41 871.21c689.11,612.26 1340.04,915.18 2246.83,1201.97 1483.79,469.29 3652.72,47.55 4818.67,-849.52 380.53,-292.77 567.09,-426.73 923.75,-803 136.99,-144.52 255.09,-322.46 393.82,-472.59 66.11,-742.34 -434.78,-2151.39 -813.91,-2517.7 -220.48,90.74 -1460.13,1418.4 -3807.98,1419.31 -1271.05,0.5 -2449.89,-406.46 -3429.13,-1132.01 -126.8,-93.95 -263.16,-222.73 -378.85,-288.85 -474.87,419.94 -945.74,2065.18 -815.97,2869.93z" />
                <path fill="#1D1D53" d="M6736.6 12818.67l-1.64 -782.85c-1657.71,-209.5 -2543.42,-675.66 -3411.94,-1570.71 -718.35,-740.29 -1439.44,-2074.46 -1383.32,-3599.11 100.17,-2721.26 2267.28,-4935.65 5052.73,-4930.52 2752.92,5.08 4946.31,2188.65 5045.16,4895.13 76.33,2090.31 -1141.07,3839.52 -2801.64,4676.57 -627.96,316.54 -1218.22,455.62 -2006.75,525.51l0.68 792.59c731.75,47.41 1774.45,-302.64 2323.44,-577.17 742.14,-371.1 1166.59,-725.2 1675.15,-1216.75 1027.54,-993.18 1631.9,-2677.09 1611.07,-4165.36 -44.08,-3149.31 -2656.27,-5728.07 -5847.17,-5731.57 -3214.44,-3.53 -5769,2559.52 -5855.38,5731.53 -65,2386.74 1361.44,4452.3 3292.25,5384.57 464.23,224.15 1617.8,564.87 2307.37,568.15z" />
                <path fill="#E30713" d="M2368.41 7234.79c265.44,4068.69 5126.37,5839.59 7970.65,2942.56 903.1,-919.84 1228.96,-1986.71 1275.21,-3293.23 -138.74,150.14 -256.84,328.07 -393.82,472.59 -356.66,376.28 -543.22,510.23 -923.75,803 -1165.95,897.07 -3334.88,1318.8 -4818.67,849.52 -906.79,-286.79 -1557.72,-589.71 -2246.83,-1201.97l-866.41 -871.21 3.63 298.74z" />
                <polygon
                  fill="#1D1D53"
                  points="967.98,16840.21 13010.66,16851.55 13010.76,16158.52 967.7,16158.61 "
                />
                <polygon
                  fill="#1D1D53"
                  points="967.46,15855.33 13010.75,15868.07 13010.56,15185.77 970.89,15181.69 "
                />
              </svg>
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
                <Link className="btn btn-primary btn-transition rounded-pill" to="join">Стать волонтером</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;