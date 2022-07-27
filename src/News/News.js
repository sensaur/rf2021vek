import { Link } from "react-router-dom";
import { useEffect } from "react"
import alex from "../img/img33.jpeg";
import rf21vek from "../img/900x450/rf21vek.png";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div
      className="container"
      style={{ marginTop: '80px' }}
    >
      <div className="card card-stretched-vertical mb-10">
        <div className="row gx-0">
          <div className="col-lg-8">
            <div className="shape-container overflow-hidden">
              <img className="card-img" src={rf21vek} alt="dd" />

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

              <div className="shape shape-bottom d-lg-none zi-1" style={{ marginBottom: "-.25rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-body">
              <h3 className="card-title">
                <Link className="text-dark small" to="/article/1">
                  Филантропия, фандрайзинг и наш опыт
                </Link>
              </h3>

              <p className="card-text small">
                “Только лишь небольшая часть людей интересуется благотворительностью и еще меньшая в
                ней участвует. Люди не могут находиться в постоянном контакте с проблемами, которые
                поднимают фонды, им проще сделать один раз пожертвование или подключить обязательные
                платежи, чтоб какая-то сумма списывалась раз в период, чем быть постоянно
                вовлеченными в повестку...
              </p>

              <div className="card-footer">
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
                        src={alex}
                        alt="alex"
                      />
                    </div>
                    {/* <div */}
                    {/*  className="avatar avatar-xs avatar-circle" */}
                    {/*  data-bs-toggle="tooltip" */}
                    {/*  data-bs-placement="top" */}
                    {/*  title="John O'nolan" */}
                    {/* > */}
                    {/*  <img */}
                    {/*    className="avatar-img" */}
                    {/*    src={img4} */}
                    {/*    alt="Ieee" */}
                    {/*  /> */}
                    {/* </div> */}
                  </div>

                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-end">
                      <p className="card-text">25 марта 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
