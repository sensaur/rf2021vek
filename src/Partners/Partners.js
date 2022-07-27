import img14 from '../img/480x320/img13.jpg'
// import amazonLogo from '../img/amazon.svg'

function Partners() {
  return (
    <div className="container content-space-2 content-space-lg-3">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <span className="text-cap">Сотрудничество</span>
        <h2>
          Наши партнёры
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 mb-5">
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                {/* <img */}
                {/*  className="avatar avatar-lg avatar-4x3" */}
                {/*  src={amazonLogo} */}
                {/*  alt="Logo" */}
                {/* /> */}
              </div>
              <p className="card-text">
                <b>Досуговый центр Радуга</b>
              </p>
              <p>
                Благотворительная общественная организация помощи инвалидам детства досуговый
                “центр Радуга”.
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                {/* <img */}
                {/*  className="avatar avatar-lg avatar-4x3" */}
                {/*  src={amazonLogo} */}
                {/*  alt="Logo" */}
                {/* /> */}
              </div>
              <p className="card-text">
                <b>Библиотеки Южнопортового района 121-124 ОКЦ ЮВАО</b>
              </p>
              <p>
                Сотрудники библиотеки проводят мероприятия и организовывают специальную программу
                для центров помощи детям с инвалидностью.
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                {/* <img */}
                {/* //   className="avatar avatar-lg avatar-4x3" */}
                {/* //   src={amazonLogo} */}
                {/* //   alt="Logo" */}
                {/* // /> */}
              </div>
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
              src={img14}
              alt="7777"
            />

            <div className="card-body">
              <div className="mb-3">
                {/* <img */}
                {/*  className="avatar avatar-lg avatar-4x3" */}
                {/*  src={amazonLogo} */}
                {/*  alt="Logo" */}
                {/* /> */}
              </div>
              <p className="card-text">
                <b>Чаша Сердца</b>
              </p>
              <p>
                Региональная благотворительная общественная организация содействия в социальной
                защите инвалидам детства.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Partners;
