import { useState, useEffect } from "react";
import Client from '../Contentful'
// import img14 from "../img/900x450/img14.jpg";

function Project1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [state, setState] = useState({})

  const formatData = (items) => {
    console.log("items==>", items)
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
      })
      console.log("response.items==>", response.items)
      const projects = formatData(response.items)
      setState(projects)
      console.log("state=>>", state)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async function resolve() { await getData(); }());
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: '90px' }}
    >
      <div
        className="bg-dark rounded-2 mx-3 mx-xl-1"
      >
        <div
          className="container-xl container-fluid content-space-1 content-space-md-2 px-4 px-md-8 px-lg-10"
        >
          <div className="px-3" />
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <span className="text-cap text-white-70">
              {state[1]?.title}
            </span>
            <h2 className="text-white">
              {state[1]?.description}
            </h2>
          </div>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={state[1]?.image}
              alt="dobro"
            />
          </div>
        </div>
      </div>
      <h3 className="py-3 mx-1">
        {state[1]?.header1}
      </h3>
      <p className="py-1 mx-1">
        {state[1]?.text1}
      </p>
      <h3 className="mx-1">
        {state[1]?.header2}
      </h3>
      <p className="py-1 mx-1">
        {state[1]?.text2}
      </p>
    </div>
  );
}

export default Project1;
