import { useEffect } from "react";

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="container content-space-2 content-space-lg-2">
      <div className="row">
        <div className="col-lg-12 mb-9 mb-lg-0">
          <div className="mb-5">
            <h2>Контакты ОСОО «Россия XXI век»</h2>
            <h5 className="mb-1">Режим работы: 9:30 — 18:30</h5>
          </div>

          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aab878cdc335d92123ab91c85b5e79452e39d9e1cd3330ec781998c081156ae6b&amp;source=constructor"
            width="100%"
            height="400"
          />

          <div className="row py-2">
            <div className="col-sm-6">
              <h5 className="mb-1">Телефон:</h5>
              <a href="tel:7-495-150-80-57" className="link-dark">+7 (495) 150-80-57</a>
            </div>

            <div className="col-sm-6">
              <h5 className="mb-1">Email:</h5>
              <a className="link-dark" href="mailto:info@rf21vek.ru">info@rf21vek.ru</a>
            </div>

            <div className="col-sm-6">
              <h5 className="mb-1 py-1">Адрес:</h5>
              <p className="link-dark py-2">
                1127474, г. Москва,
                Дмитровское шоссе, д. 60
              </p>
            </div>
            <div className="col-sm-6">
              <h5 className="mb-1 py-1">Соц сети:</h5>
              <a
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                href="https://vk.com/public214792240"
              >
                <span className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2">
                  <svg
                    className="t-sociallinks__svg"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30px"
                    height="30px"
                    viewBox="0 0 99 99"
                    enableBackground="new 0 0 99 99"
                    xmlSpace="preserve"
                  >
                    <desc>VK</desc>
                    <path
                      style={{ fill: "#8c98a4" }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49 98C76.062 98 98 76.062 98 49C98 21.938 76.062 0 49 0C21.938 0 0 21.938 0 49C0 76.062 21.938 98 49 98ZM22 34C22.4442 55.3198 33.1042 68.1323 51.7933 68.1323H52.8527V55.9351C59.7202 56.6182 64.9132 61.6409 66.9973 68.1323H76.7008C74.0359 58.4292 67.0314 53.0649 62.658 51.0149C67.0314 48.4866 73.1814 42.3367 74.6505 34H65.8353C63.922 40.7649 58.251 46.915 52.8527 47.4958V34H44.0374V57.6433C38.5707 56.2766 31.6692 49.6482 31.3617 34H22Z"
                    />
                  </svg>

                </span>
              </a>
              <a
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                href="http://t.me/+79202004817"
              >
                <i className="bi-telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
