import { Link } from "react-router-dom";
import img14 from "../img/480x320/img14.jpg";
import img16 from "../img/480x320/img16.jpg";
import img25 from "../img/480x320/img25.jpg";
import wave from "../img/wave-pattern-light.svg";

// import amazonLogo from "../img/amazon.svg";

function Projects() {
  return (
    <>
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
                  <h3>Твори добро</h3>
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
                  <h3>Современная молодежь</h3>
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
                  <h3>Проект по обеспечению медицинской помощи</h3>
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
      </div>

      <div
        className="bg-dark rounded-2 mx-3 mx-xl-10"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div
          className="container-xl container-fluid content-space-1 content-space-md-2 px-4 px-md-8 px-lg-10"
        >
          <div className="text-center mx-md-auto mb-5 mb-md-9">
            <h2 className="h1 text-white">Название проекта</h2>
          </div>

          <div className="js-swiper-card-blocks swiper swiper-equal-height mb-7">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="mb-4">
                      {/* <img */}
                      {/*  className="img-fluid" */}
                      {/*  src="./assets/svg/illustrations/oc-looking-for-answers.svg" */}
                      {/*  alt="Image Description" */}
                      {/*  style="height: 12rem;" */}
                      {/* /> */}
                    </div>

                    <h3 className="card-title">Integrations</h3>
                    <p className="card-text">
                      Front works with the tools and services you already use
                      every day. Pipe in information or take action without leaving Front.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="mb-4">
                      {/* <img */}
                      {/*  className="img-fluid" */}
                      {/*  src="./assets/svg/illustrations/oc-growing.svg" */}
                      {/*  alt="Image Description" */}
                      {/*  style="height: 12rem;" */}
                      {/* /> */}
                    </div>

                    <h3 className="card-title">Security</h3>
                    <p className="card-text">
                      We take security seriously at Slack. We offer measures
                      like 2FA and SSO to ensure the safety of your data and protect your
                      organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="mb-4">
                      {/* <img */}
                      {/*  className="img-fluid" */}
                      {/*  src="./assets/svg/illustrations/oc-chatting.svg" */}
                      {/*  alt="Image Description" */}
                      {/*  style="height: 12rem;" */}
                      {/* /> */}
                    </div>

                    <h3 className="card-title">Channels</h3>
                    <p className="card-text">
                      Communication in Front happens in channels, organized
                      by project, topic, team, or whatever makes sense for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="js-swiper-card-blocks-pagination swiper-pagination swiper-pagination-light d-lg-none"
            />
          </div>

          <div className="text-center">
            <p className="text-white">
              See Help Front in action.
              <a
                className="link link-warning"
                href="/"
              >
                Get a demo
                {' '}
                <i
                  className="bi-arrow-right-circle-fill align-middle fs-3 ms-1"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>

  );
}

export default Projects;
