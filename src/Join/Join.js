import { useEffect } from "react";

function Join() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="container content-space-2 content-space-lg-2">
      <div className="mx-auto" style={{ maxWidth: "35rem" }}>
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-5 mb-md-9">
              <h2>Расскажите о себе</h2>
            </div>
            <form>
              <div className="row gx-3">
                <div className="col-sm-6">
                  <div className="mb-3">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="form-label" htmlFor="hireUsFormFirstName">Имя</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="hireUsFormNameFirstName"
                      id="hireUsFormFirstName"
                      placeholder="Имя"
                      aria-label="Имя"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="mb-3">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="form-label" htmlFor="hireUsFormLasttName">Фамилия</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="hireUsFormNameLastName"
                      id="hireUsFormLasttName"
                      placeholder="Фамилия"
                      aria-label="Фамилия"
                    />
                  </div>
                </div>
                <div className="row gx-3">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label className="form-label" htmlFor="hireUsFormWorkEmail">
                        Email&nbsp;
                      </label>
                      <span
                        className="form-label-secondary"
                      >
                        (Не обязательно)
                      </span>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="hireUsFormNameWorkEmail"
                        id="hireUsFormWorkEmail"
                        placeholder="email@site.com"
                        aria-label="email@site.com"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="mb-3">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label className="form-label" htmlFor="hireUsFormPhone">
                        Телефон
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="hireUsFormNamePhone"
                        id="hireUsFormPhone"
                        placeholder="+7(xxx)xxx-xx-xx"
                        aria-label="+7(xxx)xxx-xx-xx"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="form-label" htmlFor="hireUsFormDetails">Комментарий к заявке &nbsp;</label>
                  <span
                    className="form-label-secondary"
                  >
                    (Не обязательно)
                  </span>
                  <textarea
                    className="form-control form-control-lg"
                    name="hireUsFormNameDetails"
                    id="hireUsFormDetails"
                    placeholder="Укажите дополнительную информацию по желанию ..."
                    aria-label="Укажите дополнительную информацию по желанию ..."
                    rows="4"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Отправить заявку</button>
                </div>

                <div className="text-center">
                  <p className="form-text">Оформляя форму вы соглашаетесь с политикой обработки персональных данных</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
