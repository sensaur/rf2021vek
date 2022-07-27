import { Link } from "react-router-dom";
import { useEffect } from "react";
import img14 from "../img/480x320/img14.jpg";
import img16 from "../img/480x320/img16.jpg";
import img25 from "../img/480x320/img25.jpg";
import { useUsersContext } from "../context";

// import amazonLogo from "../img/amazon.svg";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { state } = useUsersContext()
  console.log(state)
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
              <p className="card-text">
                <h3>Твори добро</h3>
                Улучшение физического и эмоционального самочувствие детей с особенностями развития
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/projects/1">
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
              <p className="card-text">
                <h3>Современная молодежь</h3>
                Привлечение внимания молодежи к проблемам детей с особенностями
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/projects/2">
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
              <p className="card-text">
                <h3>Проект по обеспечению медицинской помощи</h3>
                Обеспечение нуждающихся ветеранов, детей с инвалидностью медицинскими препаратами
              </p>
            </div>

            <div className="card-footer pt-0">
              <Link className="card-link" to="/projects/3">
                Подробнее
                <i
                  className="bi-chevron-right small ms-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Projects;
