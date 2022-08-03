import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import circledStripe from "../img/circled-stripe.svg";
import dots from "../img/dots.svg";
// import img10 from '../img/img10.jpg'
// import mailchimp from '../img/mailchimp-primary.svg'

function SwiperSlider() {
  return (

    <div className="gradient-y-sm-primary position-relative zi-2 overflow-hidden">
      <div
        className="container position-relative content-space-t-3 content-space-t-lg-4 content-space-b-1"
      >

        <div className="container content-space-0">
          <h1 className="text-center">
            Отзывы
          </h1>
          <Swiper
            className="zi-2"
            pagination={{
              type: "progressbar",
            }}
            navigation
            modules={[Navigation, Pagination]}
            // style={{ height: '700px' }}
          >
            <SwiperSlide>
              <div className="swiper-slide py-6">
                <figure className="w-md-65 text-center mx-md-auto py-6">
                  <blockquote className="blockquote">
                    Огромная благодарность Свистову Алексею – директору ОСОО “Россия XXI век” за его
                    отзывчивостьизаботу о детях, он часто сам принимает участие в наших мероприятиях
                    и общается с детьми.Всегда помогает и поддерживает наш центр. Искренне желаем
                    Алексею и его команде здоровья, оптимизма и процветания.
                  </blockquote>
                  <figcaption className="blockquote-footer mb-5">
                    Дмитриева Валентина

                  </figcaption>
                  <span className="blockquote-footer-source">
                    Директор благотворительной общественной организации
                    помощи инвалидам детства
                  </span>
                  <span className="blockquote-footer-source">“Досуговый центр Радуга”</span>
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide py-6">
                <figure className="w-md-65 text-center mx-md-auto py-6">
                  <blockquote className="blockquote">
                    В поисках волонтерских проектов, набрела на сайт “Россия XXI век” и решила
                    подать заяву на волонтера. Меня пригласили поучаствовать в празднике ко дню
                    защиты детей. Приятно удивило то, как праздник был организован, я помогала в
                    различных конкурсах, взаимодействовала с детьми и получила удовольствие видя их
                    радостные счастливые лица.
                  </blockquote>
                  <figcaption className="blockquote-footer mb-5">
                    Нахабина Наталья
                    <span className="blockquote-footer-source"> Волонтёр</span>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide py-6">
                <figure className="w-md-65 text-center mx-md-auto py-6">
                  <blockquote className="blockquote">
                    Благодарим за поддержку ОСОО “Россия XII век” и помощь в организации мероприятий
                    по социализации детей – инвалидов.
                  </blockquote>
                  <figcaption className="blockquote-footer mb-5">
                    Светлана Дорофеевна
                  </figcaption>
                  <span className="blockquote-footer-source">
                    Директор региональной благотворительной организации помощи инвалидам детства
                  </span>
                  <span className="blockquote-footer-source">“Чаша Сердца”</span>
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide py-6">
                <figure className="w-md-65 text-center mx-md-auto py-6">
                  <blockquote className="blockquote">
                    Приятно быть частью организации, которая стремиться привлечь не только
                    пожертвования, но и заботиться о том, чтобы дети с особенностями развития,
                    коммуницировали, участвовали в мероприятиях и получали хорошие эмоции.
                  </blockquote>
                  <figcaption className="blockquote-footer mb-5">
                    Макаров Николай
                    <span className="blockquote-footer-source"> Волонтёр </span>
                  </figcaption>
                </figure>
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
            bottom: '30rem', left: "-3rem", width: "15rem", height: "15rem",
          }}
        >
          <img
            className="img-fluid"
            src={dots}
            alt="Description"
          />
        </figure>
        <figure
          className="position-absolute zi-n1 d-block d-sm-none"
          style={{
            bottom: '21rem', left: "7rem", width: "10rem", height: "10rem",
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
  );
}

export default SwiperSlider;
