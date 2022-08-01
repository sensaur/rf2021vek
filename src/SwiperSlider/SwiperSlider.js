import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import img10 from '../img/img10.jpg'
// import mailchimp from '../img/mailchimp-primary.svg'

function SwiperSlider() {
  return (
    <div className="container">
      <h1 className="text-center">
        Отзывы
      </h1>
      <Swiper
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
              <div className="mb-3">
                <img
                  className="avatar avatar-xl avatar-circle"
                  src={img10}
                  alt="dd"
                />
              </div>
              <blockquote className="blockquote">
                Огромная благодарность Свистову Алексею – директору ОСОО “Россия XXI век” за его
                отзывчивость и заботу о детях, он часто сам принимает участие в наших мероприятиях и
                общается с детьми. Всегда помогает и поддерживает наш центр. Искренне желаем Алексею
                и его команде здоровья, оптимизма и процветания.
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
              <div className="mb-3">
                <img
                  className="avatar avatar-xl avatar-circle"
                  src={img10}
                  alt="dd"
                />
              </div>
              <blockquote className="blockquote">
                В поисках волонтерских проектов, набрела на сайт “Россия XXI век” и решила подать
                заяву на волонтера. Меня пригласили поучаствовать в празднике ко дню защиты детей.
                Приятно удивило то, как праздник был организован, я помогала в различных конкурсах,
                взаимодействовала с детьми и получила удовольствие видя их радостные и счастливые
                лица.
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
              <div className="mb-3">
                <img
                  className="avatar avatar-xl avatar-circle"
                  src={img10}
                  alt="dd"
                />
              </div>
              <blockquote className="blockquote">
                Благодарим за поддержку ОСОО “Россия XII век” и помощь в организации мероприятий по
                социализации детей – инвалидов.
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
              <div className="mb-3">
                <img
                  className="avatar avatar-xl avatar-circle"
                  src={img10}
                  alt="dd"
                />
              </div>
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
  );
}

export default SwiperSlider;
