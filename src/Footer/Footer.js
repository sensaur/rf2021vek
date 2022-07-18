import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container pb-1 pb-lg-5">
        <div className="row content-space-t-1">
          <div className="col-lg-6 mb-7 mb-lg-0">
            <ul className="list-unstyled">
              <li className="list-item">
                <Link className="link-sm link-light" to="/">Политика конфиденциальности</Link>
              </li>
              <li className="list-item">
                <Link className="link-sm link-light" to="/">
                  Согласие на обработку персональных
                  данных
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-7 mb-lg-0">
            <ul className="list-unstyled list-py-2">
              <li>
                <Link className="link-sm link-light" to="/">
                  {/* <div className="mb-5" style={{ width: '10px', height: '10px' }}> */}
                  {/*  <img */}
                  {/*    src="../logo5.png" */}
                  {/*    alt="fff" */}
                  {/*    style={{ width: '16px', height: '16px' }} */}
                  {/*  /> */}
                  {/* </div> */}
                  ОСОО «Россия XXI век»
                  <div />
                  ИНН 7734411720
                  <div />
                </Link>
              </li>
              <li>
                <Link className="link-sm link-light" to="/">
                  <i
                    className="bi-geo-alt-fill me-1"
                  />
                  127474, г. Москва,
                  <div />
                  Дмитровское шоссе, д. 60
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 mb-7 mb-lg-0">
            {/* <p className="link-sm link-light">КОНТАКТЫ</p> */}
            <ul className="list-unstyled list-py-1">
              <li>
                <a className="link-sm link-light" href="mailto:info@xn--21-flcmlqwpka9m.xn--p1ai">
                  <i
                    className="bi-envelope me-1"
                  />
                  info@россия21век.рф
                </a>
              </li>
              <li>
                <a className="link-sm link-light" href="tel:7-495-120-25-53">
                  <i
                    className="bi-telephone-inbound-fill me-1"
                  />
                  {' '}
                  +7 (495) 120-25-53
                </a>
              </li>
              <li className="link-sm link-light">
                <i
                  className="bi-clock me-1"
                />
                Режим работы: 9:30 — 18:30
              </li>
            </ul>

          </div>
        </div>

        <div className="border-top border-white-10 my-3" />

        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">
            &copy; ОСОО «Россия XXI век»
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
