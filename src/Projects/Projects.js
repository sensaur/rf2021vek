import { Link } from "react-router-dom";
import img14 from "../img/480x320/img14.jpg";
import img16 from "../img/480x320/img16.jpg";
import img25 from "../img/480x320/img25.jpg";
// import amazonLogo from "../img/amazon.svg";

function Projects() {
  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2>
          Наши проекты
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              {/* <div className="mb-3"> */}
              {/*  <img */}
              {/*    className="avatar avatar-lg avatar-4x3" */}
              {/*    src={amazonLogo} */}
              {/*    alt="Logo" */}
              {/*  /> */}
              {/* </div> */}
              <p className="card-text">
                <h3>Наш первый проект</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, porro.
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/">
                Подробнее
                <i
                  className="bi-chevron-right small ms-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img16}
              alt="7777"
            />

            <div className="card-body">
              {/* <div className="mb-3"> */}
              {/*  <img */}
              {/*    className="avatar avatar-lg avatar-4x3" */}
              {/*    src={amazonLogo} */}
              {/*    alt="Logo" */}
              {/*  /> */}
              {/* </div> */}
              <p className="card-text">
                <h3>Наш второй проект</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, vitae!
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/">
                Подробнее
                <i
                  className="bi-chevron-right small ms-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img25}
              alt="7777"
            />

            <div className="card-body">
              {/* <div className="mb-3"> */}
              {/*  <img */}
              {/*    className="avatar avatar-lg avatar-4x3" */}
              {/*    src={amazonLogo} */}
              {/*    alt="Logo" */}
              {/*  /> */}
              {/* </div> */}
              <p className="card-text">
                <h3>Наш третий проект</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ex.
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/">
                Подробнее
                <i
                  className="bi-chevron-right small ms-1"
                />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* <div className="text-center"> */}
      {/*  <Link className="btn btn-outline-primary" to="/">Все партнеры</Link> */}
      {/* </div> */}
    </div>

  );
}

export default Projects;
