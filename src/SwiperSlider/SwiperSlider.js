import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import img10 from '../img/img10.jpg'
import mailchimp from '../img/mailchimp-primary.svg'

function SwiperSlider() {
  return (
    <div className="container">
      <h4 className="text-center">
        Россия XXI век занимается благотворительной помощью, привлечением волонтеров и
        неравнодушных людей
      </h4>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation
        modules={[Navigation, Pagination]}
        style={{ height: '500px' }}
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
                “ Было приятно наконец-то найти профессиональных волонтеров, которые знают, как
                работать с пациентами поликлиники как оперативно решать проблемы. ”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Максим Крымский
                <span className="blockquote-footer-source">Project Manager</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
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
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti doloremque
                error magnam nihil, optio quidem voluptas.”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Lorem ipsum.
                <span className="blockquote-footer-source"> Lorem ipsum.</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
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
                “ Было приятно наконец-то найти профессиональных волонтеров, которые знают, как
                работать с пациентами поликлиники как оперативно решать проблемы. ”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Максим Крымский
                <span className="blockquote-footer-source">Project Manager</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
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
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti doloremque
                error magnam nihil, optio quidem voluptas.”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Lorem ipsum.
                <span className="blockquote-footer-source"> Lorem ipsum.</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
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
                “ Было приятно наконец-то найти профессиональных волонтеров, которые знают, как
                работать с пациентами поликлиники как оперативно решать проблемы. ”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Максим Крымский
                <span className="blockquote-footer-source">Project Manager</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
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
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti doloremque
                error magnam nihil, optio quidem voluptas.”
              </blockquote>
              <figcaption className="blockquote-footer mb-5">
                Lorem ipsum.
                <span className="blockquote-footer-source"> Lorem ipsum.</span>
              </figcaption>
              <img
                className="avatar avatar-xl avatar-4x3"
                src={mailchimp}
                alt="Logo"
              />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
