function Contacts() {
  return (
    <div className="container content-space-2 content-space-lg-2">
      <div className="row">
        <div className="col-lg-8 mb-9 mb-lg-0">
          <div className="mb-5">
            <h2>Контакты ОСОО «Россия XXI век»</h2>
          </div>

          <div style={{ width: '1000px;', height: '400px', backgroundColor: 'green' }}>Здесь будет карта</div>

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
              <p>
                1127474, г. Москва,
                Дмитровское шоссе, д. 60
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
