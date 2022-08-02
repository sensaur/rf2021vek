import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Client from "../Contentful";
import Loader from "../Loader/Loader";

function ProjectDetail() {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [loader, setLoader] = useState(false)
  const [oneProject, setOneProject] = useState({})
  const formatData = (items) => {
    const tempItems = items.map((item) => {
      const idFromServer = item.sys.id;
      const image = item.fields.image.fields.file.url
      const project = { ...item.fields, id: idFromServer, image }
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
      const projects = formatData(response.items);
      (setLoader(false))
      setOneProject(projects.filter((el) => el.id === id)[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoader(true);
    (async function resolve() {
      await getData();
    }());
  }, []);

  if (loader) {
    return <Loader />
  }

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
              {oneProject.title}
            </span>
            <h2 className="text-white">
              {oneProject.description}
            </h2>
          </div>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={oneProject.image}
              alt="dobro"
            />
          </div>
        </div>
      </div>
      <div className="mx-1">
        {documentToReactComponents(oneProject.textMain1)}
      </div>
    </div>
  );
}

export default ProjectDetail;
