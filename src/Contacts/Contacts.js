import { Link } from "react-router-dom";

function Contacts() {
  <script
    type="text/javascript"
    async
    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aab878cdc335d92123ab91c85b5e79452e39d9e1cd3330ec781998c081156ae6b&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
  />
  return (
    <div className="container content-space-2 content-space-lg-2">
      <div className="row">
        <div className="col-lg-8 mb-9 mb-lg-0">
          <div className="mb-5">
            <h2>Контакты ОСОО «Россия XXI век»</h2>
          </div>

          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aab878cdc335d92123ab91c85b5e79452e39d9e1cd3330ec781998c081156ae6b&amp;source=constructor"
            width="500"
            height="400"
          />

          <div className="row py-2">
            <div className="col-sm-6">
              <h5 className="mb-1">Телефон:</h5>
              <p>+7 (495) 120-25-53</p>
            </div>

            <div className="col-sm-6">
              <h5 className="mb-1">Email:</h5>
              <p>info@россия21век.рф</p>
            </div>

            <div className="col-sm-6">
              <h5 className="mb-1">Адрес:</h5>
              <p>
                1127474, г. Москва,
                Дмитровское шоссе, д. 60
              </p>
            </div>
            <div className="col-sm-6">
              <h5 className="mb-1">Соц сети:</h5>

              <Link
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                to="/"
              >
                <i className="bi-facebook" />
              </Link>
              <Link
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                to="/"
              >
                <i className="bi-twitter" />
              </Link>
              <Link
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                to="/"
              >
                <i className="bi-instagram" />
              </Link>
              <Link
                className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2"
                to="/"
              >
                <i className="bi-telegram" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
