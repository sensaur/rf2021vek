import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../Contentful";

// import amazonLogo from "../img/amazon.svg";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  // const { state } = useUsersContext()
  // console.log(state)
  // useEffect(() => {
  //   console.log(state)
  // }, [state])
  //
  const [state, setState] = useState([])
  //
  const formatData = (items) => {
    // console.log("items==>", items)
    const tempItems = items.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url
      const project = { ...item.fields, id, image }
      return project
    })
    return tempItems
  }

  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "projects",
        order: "sys.createdAt",
      })
      // console.log("response.items==>", response.items)
      const projects = formatData(response.items)
      // console.log("projects=>", projects)
      setState(projects)
      // console.log("state!!!=>>", state)
    } catch (error) {
      console.log(error)
    }
  }

  // const resultOfFunction = useMemo(() => ({
  //   state, setState, getData,
  // }), [state])

  useEffect(() => {
    // console.log("111");
    (async function resolve() { await getData(); }());
  }, []);

  // useEffect(() => {
  //   console.log("i am state from ue", state);
  // }, [state]);

  // console.log(setState)
  // console.log(state)
  // console.log(formatData)
  // console.log(getData)
  // eslint-disable-next-line no-unused-expressions
  // state.image ? console.log("y") : console.log("n")
  if (state.image) {
    return (
      <div className="container content-space-2 content-space-lg-3">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
          <h2>
            Наши проекты
          </h2>
        </div>
      </div>
    )
  }
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
  )
}

export default Projects;
