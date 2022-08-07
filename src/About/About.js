import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line no-unused-vars
import {
  Pagination, Autoplay, Navigation,
} from "swiper";
import svi04 from '../img/svi04.jpg'
import kul04 from '../img/kul04.jpg'
import orl03 from '../img/orl03.jpg'
import img01 from '../img/img01.jpg'
import img02 from '../img/img02.jpg'
import img03 from '../img/img03.jpg'
import img04 from '../img/img04.jpg'
import img05 from '../img/img05.jpg'
import img06 from '../img/img06.jpg'
import circledStripe from '../img/circled-stripe.svg'
import dots from '../img/dots.svg'
import Partners from '../Partners/Partners'
import Feedback from "../Feedback/Feedback";
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

function About() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])
  return (
    <main id="content" role="main">
      <div
        className="container content-space-t-3 content-space-t-lg-3"
        style={{ marginBottom: "5rem" }}
      >
        <div className="w-lg-75 text-center mx-lg-auto">
          <div className="mb-5 mb-md-10">
            <h1 style={{ fontSize: "calc(1.475rem + 2.7vw)", margin: "0" }}>Россия XXI век</h1>
            {/* <p className="lead content-space-t-lg-1"> */}
            <p className="lead" style={{ paddingTop: "48px" }}>
              Благотворительная некоммерческая организация. Мы занимаемся благотворительной помощью,
              привлечением волонтеров на помощь детям с инвалидностью и их родителям.
            </p>
          </div>
        </div>

        <div className="row gx-3">
          <div className="col mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img01})`, height: '15rem' }}
            />
          </div>

          <div className="col-3 d-none d-md-block mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img02})`, height: '15rem' }}
            />
          </div>

          <div className="col mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img03})`, height: '15rem' }}
            />
          </div>

          <div className="w-100" />

          <div className="col mb-3 mb-md-0">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img04})`, height: '15rem' }}
            />
          </div>

          <div className="col-4 d-none d-md-block mb-3 mb-md-0">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img05})`, height: '15rem' }}
            />
          </div>

          <div className="col">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img06})`, height: '15rem' }}
            />
          </div>
        </div>
      </div>

      <div className="border-top mx-auto" style={{ maxWidth: '25rem' }} />

      <div className="gradient-y-sm-primary position-relative zi-2 overflow-hidden">
        <div
          className="container position-relative content-space-t-3 content-space-t-lg-4 content-space-b-2"
        >

          <div className="row justify-content-lg-between">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2>О НАС</h2>
            </div>

            <div className="col-lg-6 zi-2">
              <p>
                Общероссийский союз общественных объединений содействия построению социального
                государства «Россия XXI век» был основан в 2018 году.
              </p>
              <p>
                Благодаря нашим связям и опыту, мы привлекаем квалифицированных специалистов,
                которые работают в различных сферах, и на общественных началах задействованы в нашей
                организации.
              </p>
              <p style={{ fontSize: "1.5rem" }}><b>Наша деятельность:</b></p>
              <ul className="list-unstyled list-py-2">
                <li>
                  <span className="legend-indicator bg-primary" />
                  Оказание медицинской помощи;
                </li>
                <li>
                  <span className="legend-indicator bg-primary" />
                  Распределение нуждающихся в медучреждения, по необходимости и запросу;
                </li>
                <li>
                  <span className="legend-indicator bg-primary" />
                  Помощь в реабилитации детей инвалидов;
                </li>
                <li>
                  <span className="legend-indicator bg-primary" />
                  Социализация детей, организация различного досуга и мероприятий;
                </li>
                <li>
                  <span className="legend-indicator bg-primary" />
                  Привлечение волонтеров для разносторонней помощи;
                </li>
              </ul>
            </div>
          </div>

          <figure
            className="position-absolute zi-n1"
            style={{
              top: "-35rem", left: "50rem", width: "62rem", height: "62rem",
            }}
          >
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 260 260"
            >
              <circle fill="#e7eaf3" opacity=".7" cx="130" cy="130" r="130" />
            </svg>
          </figure>

          <figure
            className="position-absolute zi-n1"
            style={{
              top: '15rem', left: '70rem', width: '20rem', height: '20rem',
            }}
          >
            <img
              className="img-fluid"
              src={circledStripe}
              alt="Description"
            />
          </figure>

          <figure
            className="position-absolute zi-n1 d-none d-sm-block"
            style={{
              bottom: '15rem', left: "5rem", width: "15rem", height: "15rem",
            }}
          >
            <img
              className="img-fluid"
              src={dots}
              alt="Description"
            />
          </figure>
        </div>

        <div className="shape shape-bottom zi-1">
          <svg
            width="3000"
            height="500"
            viewBox="0 0 3000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 500H3000V0L0 500Z" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="border-top mx-auto" style={{ maxWidth: '25rem' }} />

      <Partners />

      <div className="gradient-y-sm-primary position-relative zi-2 overflow-hidden">
        <div
          className="container position-relative content-space-t-3 content-space-t-lg-4 content-space-b-2"
        >
          <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            {/* <h1 className="display-4 mb-3">Путь развития</h1> */}
            <h1 className="">Путь развития</h1>
            <p className="lead">
              За время работы в различных субъектах РФ мы достигли больших
              результатов
            </p>
          </div>
          {/* desktop */}
          <div
            className="js-swiper-software-hero swiper zi-2 d-none d-sm-block"
            style={{ height: '3000px;' }}
          >

            <Swiper
              slidesPerView={3}
              loop
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(55,126,254)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2018</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Всероссийский конкурс &quot;Российская
                      династия&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(5,200,168)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2019</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Социальная поддержка детей-инвалидов &quot;Твори
                      добро&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(244,200,153)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2020</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Турнир по шахматам среди инвалидов
                      совместно с РОО&quot;ХБШО&quot; России
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(237,76,120)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2021</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Решение соц. проблем инвалидов, помощь медучреждениям &quot;Я волонтер&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(55,126,254)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2022</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Проведение регулярных мероприятий и помощь в социализации детей-инвалидов
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
          {/* mobile */}
          <div className="js-swiper-software-hero swiper zi-2 d-block d-sm-none d-md-none">

            <Swiper
              slidesPerView={1}
              loop
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(55,126,254)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2018</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Всероссийский конкурс &quot;Российская
                      династия&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(5,200,168)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2019</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Социальная поддержка детей-инвалидов &quot;Твори
                      добро&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(244,200,153)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2020</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Турнир по шахматам среди инвалидов
                      совместно с РОО&quot;ХБШО&quot; России
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(237,76,120)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2021</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Решение соц. проблем инвалидов, помощь медучреждениям &quot;Я волонтер&quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div
                  className="card card-sm card-transition shadow-sm"
                  style={{ backgroundColor: "rgba(55,126,254)" }}
                >
                  <div className="card-body text-center">
                    <h4 className="card-title" style={{ color: "white" }}>2022</h4>
                    <p className="card-text small" style={{ color: "white" }}>
                      Проведение регулярных мероприятий и помощь в социализации детей-инвалидов
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>

          <figure
            className="position-absolute zi-n1"
            style={{
              top: "-35rem", left: "50rem", width: "62rem", height: "62rem",
            }}
          >
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 260 260"
            >
              <circle fill="#e7eaf3" opacity=".7" cx="130" cy="130" r="130" />
            </svg>
          </figure>

          <figure
            className="position-absolute zi-n1"
            style={{
              top: '15rem', left: '70rem', width: '20rem', height: '20rem',
            }}
          >
            <img
              className="img-fluid"
              src={circledStripe}
              alt="Description"
            />
          </figure>

          <figure
            className="position-absolute zi-n1 d-none d-sm-block"
            style={{
              bottom: '13rem', left: "-3rem", width: "15rem", height: "15rem",
            }}
          >
            <img
              className="img-fluid"
              src={dots}
              alt="Description"
            />
          </figure>
        </div>

        <div className="shape shape-bottom zi-1">
          <svg
            width="3000"
            height="500"
            viewBox="0 0 3000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 500H3000V0L0 500Z" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="border-top container content-space-2 content-space-lg-1">
        <div className="container">
          <div id="vol" style={{ height: "80px" }} />
          <h1 className="text-center">Информация для волонтеров</h1>
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <p>
              Мы привлекаем волонтеров к участию в мероприятиях по социальной реабилитации детей –
              инвалидов.
            </p>
          </div>
        </div>
        <h2 className="px-lg-6">Как это работает?</h2>

        <div className="container content-space-1">
          <div className="row justify-content-lg-center">
            <div className="col-md-6 col-lg-5 mb-3 mb-md-7">
              <div className="d-flex pe-lg-5" data-aos="fade-up">
                <div className="flex-shrink-0">
                  <span className="svg-icon text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303V8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                        fill="#035A4B"
                      />
                      <path
                        d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75953 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                        fill="#035A4B"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>01</h4>
                  <p>
                    Заполните форму для волонтеров
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 mb-3 mb-md-7">
              <div className="d-flex ps-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="flex-shrink-0">
                  <span className="svg-icon text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                        fill="#035A4B"
                      />
                      <path
                        opacity="0.3"
                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                        fill="#035A4B"
                      />
                    </svg>

                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>02</h4>
                  <p>
                    В комментарии можете указать какую помощь вы готовы оказать
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 mb-3 mb-md-7 mb-lg-0">
              <div className="d-flex pe-lg-5" data-aos="fade-up" data-aos-delay="200">
                <div className="flex-shrink-0">
                  <span className="svg-icon text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M8 8C8 7.4 8.4 7 9 7H16V3C16 2.4 15.6 2 15 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H5V16.1C5 16.8 5.79999 17.1 6.29999 16.6L8 14.9V8Z"
                        fill="#035A4B"
                      />
                      <path
                        d="M22 8V18C22 18.6 21.6 19 21 19H19V21.1C19 21.8 18.2 22.1 17.7 21.6L15 18.9H9C8.4 18.9 8 18.5 8 17.9V7.90002C8 7.30002 8.4 6.90002 9 6.90002H21C21.6 7.00002 22 7.4 22 8ZM19 11C19 10.4 18.6 10 18 10H12C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H18C18.6 12 19 11.6 19 11ZM17 15C17 14.4 16.6 14 16 14H12C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16H16C16.6 16 17 15.6 17 15Z"
                        fill="#035A4B"
                      />
                    </svg>

                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>03</h4>
                  <p>
                    Наш оператор свяжется с вами
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5">
              <div className="d-flex ps-lg-5" data-aos="fade-up" data-aos-delay="300">
                <div className="flex-shrink-0">
                  <span className="svg-icon text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M10.3 14.3L11 13.6L7.70002 10.3C7.30002 9.9 6.7 9.9 6.3 10.3C5.9 10.7 5.9 11.3 6.3 11.7L10.3 15.7C9.9 15.3 9.9 14.7 10.3 14.3Z"
                        fill="#035A4B"
                      />
                      <path
                        d="M21 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22ZM11.7 15.7L17.7 9.70001C18.1 9.30001 18.1 8.69999 17.7 8.29999C17.3 7.89999 16.7 7.89999 16.3 8.29999L11 13.6L7.70001 10.3C7.30001 9.89999 6.69999 9.89999 6.29999 10.3C5.89999 10.7 5.89999 11.3 6.29999 11.7L10.3 15.7C10.5 15.9 10.8 16 11 16C11.2 16 11.5 15.9 11.7 15.7Z"
                        fill="#035A4B"
                      />
                    </svg>

                  </span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>04</h4>
                  <p>Мы определим вас на проект</p>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-5 mx-auto py-6">
              <Link className="btn btn-primary btn-transition" to="/join">
                Стать волонтером
              </Link>
            </div>

            <div className="py-1 text-end">
              <div>Остались вопросы?</div>
              <Link className="" to="/contacts">
                Свяжись с нами
              </Link>
            </div>

            <div className="container content-space-2">
              <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                <h1>Руководство</h1>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-4 mb-5 mb-lg-0">
                  <img
                    className="card-img rounded-2"
                    src={svi04}
                    alt="888"
                  />
                  <div className="card card-sm text-center mt-n7 mx-3">
                    <div className="card-body">
                      <h4 className="card-title">Свистов Алексей Александрович</h4>
                      <p className="card-text">Директор</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 mb-5 mb-lg-0">
                  <img
                    className="card-img rounded-2"
                    src={kul04}
                    alt="888"
                  />
                  <div className="card card-sm text-center mt-n7 mx-3">
                    <div className="card-body">
                      <h4 className="card-title">Кулайкин Сергей Владимирович</h4>
                      <p className="card-text">Заместитель председателя по общим вопросам</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 mb-5 mb-lg-0">
                  <img
                    className="card-img rounded-2"
                    src={orl03}
                    alt="888"
                  />
                  <div className="card card-sm text-center mt-n7 mx-3">
                    <div className="card-body">
                      <h4 className="card-title">Орлов Сергей Валерьевич</h4>
                      <p className="card-text">
                        Заместитель председателя по медицинскому и
                        социальному сотрудничеству
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feedback />
    </main>
  );
}

export default About;
