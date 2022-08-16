import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../Contentful";
import Loader from "../Loader/Loader";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(() => {
    document.title = 'Россия 21 век - проекты';
  }, []);

  const [state, setState] = useState([])
  const [loader, setLoader] = useState(false)

  const formatData = (items) => items.map((item) => {
    const { id } = item.sys;
    const image = item.fields.image.fields.file.url
    return { ...item.fields, id, image }
  })

  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "projects",
        order: "sys.createdAt",
      })
      const projects = formatData(response.items)
      setState(projects);
      (setLoader(false))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoader(true);
    (async function resolve() { await getData(); }());
  }, []);

  if (state.image) {
    return (
      <div className="container content-space-2 content-space-lg-3">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
          <h1 className="py-3">
            Наши проекты
          </h1>
        </div>
      </div>
    )
  }

  if (loader) {
    return <Loader />
  }

  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h1 className="py-3">
          Наши проекты
        </h1>
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
  )
}

export default Projects;
