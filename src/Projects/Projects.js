import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUsersContext } from "../context";

// import amazonLogo from "../img/amazon.svg";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { state } = useUsersContext()
  // console.log(state)
  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2>
          Наши проекты
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
        {state?.map((el) => (
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={el?.image}
                alt="helpingMan"
              />

              <div className="card-body">
                <p className="card-text">
                  <h3>{el?.shortTitle}</h3>
                  {el?.shortDescription}
                </p>
              </div>

              <div className="card-footer pt-0">
                <Link className="card-link" to={`/projects/${el?.id}`}>
                  Подробнее
                  <i
                    className="bi-chevron-right small ms-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
