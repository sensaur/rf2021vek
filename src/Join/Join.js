import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { send } from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function Join() {
  useEffect(() => {
    document.title = 'Россия 21 век - стать волонтером';
  }, []);
  const navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  }
  const [toSend, setToSend] = useState(initialState);
  const [loader, setLoader] = useState(false)
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const onSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-unused-expressions,no-nested-ternary
    !toSend.firstName ? swal("Пожалуйста укажите имя")
      // eslint-disable-next-line no-nested-ternary
      : !toSend.lastName ? swal("Пожалуйста укажите фамилию")
        : !toSend.phone ? swal("Пожалуйста укажите телефон")
          : send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
              ...toSend,
            },
            process.env.REACT_APP_USER_ID,
          ).then(window.scrollTo(0, 0))
            .then(setLoader(true))
            .then(() => {
              swal("Ваша заявка принята, спасибо! "
        + `\n`
        + "В ближайшее время оператор свяжется с Вами")
              navigate("/")
            }, () => { swal("Что-то пошло не так, попробуйте позднее") })
  }
  if (loader) {
    return <Loader />
  }
  return (
    <div className="container content-space-2 content-space-lg-2">
      <div className="mx-auto" style={{ maxWidth: "35rem" }}>
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-5 mb-md-9">
              <h2>Заполните форму</h2>
            </div>
            <form onSubmit={onSubmit}>
              <div className="row gx-3">
                <div className="col-sm-6">
                  <div className="mb-3">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="form-label" htmlFor="firstName">Имя</label>
                    <input
                      onChange={handleChange}
                      value={toSend.firstName}
                      type="text"
                      className="form-control form-control-lg"
                      name="firstName"
                      id="firstName"
                      placeholder="Имя"
                      aria-label="Имя"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="mb-3">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="form-label" htmlFor="lastName">Фамилия</label>
                    <input
                      onChange={handleChange}
                      value={toSend.lastName}
                      type="text"
                      className="form-control form-control-lg"
                      name="lastName"
                      id="lastName"
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
                        onChange={handleChange}
                        value={toSend.email}
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        placeholder="email@site.com"
                        aria-label="email@site.com"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="mb-3">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label className="form-label" htmlFor="phone">
                        Телефон
                      </label>
                      <input
                        onChange={handleChange}
                        value={toSend.phone}
                        type="text"
                        className="form-control form-control-lg"
                        name="phone"
                        id="phone"
                        placeholder="+7(xxx)xxx-xx-xx"
                        aria-label="+7(xxx)xxx-xx-xx"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="form-label" htmlFor="comments">
                    Комментарий к
                    заявке &nbsp;
                  </label>
                  <span
                    className="form-label-secondary"
                  >
                    (Не обязательно)
                  </span>
                  <textarea
                    onChange={handleChange}
                    value={toSend.comments}
                    className="form-control form-control-lg"
                    name="comments"
                    id="comments"
                    placeholder="Укажите дополнительную информацию по желанию ..."
                    aria-label="Укажите дополнительную информацию по желанию ..."
                    rows="4"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Отправить заявку</button>
                </div>

                <div className="text-center">
                  <p className="form-text">
                    Оформляя форму вы соглашаетесь с политикой обработки
                    персональных данных
                  </p>
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
