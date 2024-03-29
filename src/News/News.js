import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import moment from 'moment';
import Client from "../Contentful";
import Loader from "../Loader/Loader";
import 'moment/locale/ru';

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(() => {
    document.title = 'Россия 21 век - новости';
  }, []);

  const [state, setState] = useState([])
  const [loader, setLoader] = useState(false)
  const formatData = (items) => items.map((item) => {
    const { id } = item.sys;
    if (item.fields.authorAvatar) {
      const avatarUrl = item?.fields.authorAvatar.fields.file.url
      return { ...item.fields, id, avatarUrl }
    }
    return { ...item.fields, id, avatarUrl: "" }
  })
  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "articles",
        order: "sys.createdAt",
      })
      const articles = formatData(response.items)
      setState(articles);
      (setLoader(false))
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
      style={{ marginTop: '80px' }}
    >
      {state.map((el) => (
        <div className="card card-stretched-vertical mb-10">
          <div className="row gx-0">
            <div className="col-lg-8">
              <div className="shape-container overflow-hidden">
                <img className="card-img" src={el.imageShort.fields.file.url} alt="dd" />

                <div className="shape shape-end d-none d-lg-block zi-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100.1 1920"
                    height="101%"
                  >
                    <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z" />
                  </svg>
                </div>

                <div
                  className="shape shape-bottom d-lg-none zi-1"
                  style={{ marginBottom: "-.25rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                  >
                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-body">
                <h3 className="card-title">
                  <Link className="text-dark small" to={`/news/${el?.id}`}>
                    {el?.headingShort}
                  </Link>
                </h3>

                <p className="card-text small">
                  {el?.shortDescription}
                </p>

                <div className="card-footer">
                  {el.avatarUrl === ""
                    ? (
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-end">
                          <p className="card-text">{moment(el.datePublication).format('D MMMM YYYY')}</p>
                        </div>
                      </div>
                    )
                    : (
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 avatar-group avatar-group-xs">
                          <div
                            className="avatar avatar-xs avatar-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Aaron Larsson"
                          >
                            <img
                              className="avatar-img"
                              src={el?.avatarUrl}
                              alt="author"
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-end">
                            <p className="card-text">{moment(el.datePublication).format('D MMMM YYYY')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default News;
