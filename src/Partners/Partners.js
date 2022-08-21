import imgLibraries from '../img/imgLibraries.webp'
import imgPiligrim from '../img/imgPiligrim.webp'
import imgHeart from '../img/imgHeart.webp'
import imgRainbow from '../img/imgRainbow.webp'

function Partners() {
  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h1>
          Наши партнеры
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-5">
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={imgRainbow}
              alt="rainbow"
            />

            <div className="card-body">
              <p className="card-text">
                <b>Досуговый центр Радуга</b>
              </p>
              <p>
                Благотворительная общественная организация помощи инвалидам детства
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={imgLibraries}
              alt="library"
            />

            <div className="card-body">
              <p className="card-text">
                <b>Библиотеки Южнопортового района 121-124 ОКЦ ЮВАО</b>
              </p>
              <p>
                Сотрудники библиотеки проводят мероприятия и организовывают специальную программу
                для центров помощи детям с инвалидностью
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={imgPiligrim}
              alt="piligrim"
            />
            <div className="card-body">
              <p className="card-text">
                <b>Центр Пилигрим</b>
              </p>
              <p>Межрегиональная общественная организация инвалидов </p>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={imgHeart}
              alt="heart"
            />

            <div className="card-body">
              <p className="card-text">
                <b>Чаша Сердца</b>
              </p>
              <p>
                Региональная благотворительная общественная организация содействия в социальной
                защите инвалидам детства
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Partners;
