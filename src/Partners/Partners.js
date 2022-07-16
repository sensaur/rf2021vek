// import { Link } from "react-router-dom";
import img14 from '../img/480x320/img13.jpg'
import amazonLogo from '../img/amazon.svg'

function Partners() {
  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <span className="text-cap">Сотрудничество</span>
        <h2>
          Делаем блоки с картинками для каждой организации
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
              <div className="mb-3">
                <img
                  className="avatar avatar-lg avatar-4x3"
                  src={amazonLogo}
                  alt="Logo"
                />
              </div>
              <p className="card-text">
                Amazon launched their enterprise platform and built a
                powerful user experience.
              </p>
            </div>

            {/* <div className="card-footer pt-0"> */}
            {/*  <Link className="card-link" to="/"> */}
            {/*    Подробнее */}
            {/*    <i */}
            {/*      className="bi-chevron-right small ms-1" */}
            {/*    /> */}
            {/*  </Link> */}
            {/* </div> */}
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                <img
                  className="avatar avatar-lg avatar-4x3"
                  src={amazonLogo}
                  alt="Logo"
                />
              </div>
              <p className="card-text">
                Mapbox empowers marketers to create digital marketing
                dashboards easily and share them with their team.
              </p>
            </div>

            {/* <div className="card-footer pt-0"> */}
            {/*  <Link className="card-link" to="/"> */}
            {/*    Подробнее */}
            {/*    <i */}
            {/*      className="bi-chevron-right small ms-1" */}
            {/*    /> */}
            {/*  </Link> */}
            {/* </div> */}
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                <img
                  className="avatar avatar-lg avatar-4x3"
                  src={amazonLogo}
                  alt="Logo"
                />
              </div>
              <p className="card-text">
                Netflixs mission is to create a planet run by the sun. In
                order to achieve this goal, they needed to find a way to make solar simple.
              </p>
            </div>

            {/* <div className="card-footer pt-0"> */}
            {/*  <Link className="card-link" to="/"> */}
            {/*    Подробнее */}
            {/*    <i */}
            {/*      className="bi-chevron-right small ms-1" */}
            {/*    /> */}
            {/*  </Link> */}
            {/* </div> */}
          </div>
        </div>

      </div>

      {/* <div className="text-center"> */}
      {/*  <Link className="btn btn-outline-primary" to="/">Все партнеры</Link> */}
      {/* </div> */}
    </div>

  );
}

export default Partners;
