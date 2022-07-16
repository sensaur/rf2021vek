import img6 from '../img/480x320/img6.jpg'
import img7 from '../img/480x320/img7.jpg'
import img12 from '../img/480x320/img12.jpg'
import img14 from '../img/480x320/img14.jpg'
import img16 from '../img/480x320/img16.jpg'
import img25 from '../img/480x320/img25.jpg'
import Partners from '../Partners/Partners'

function About() {
  return (
    <main id="content" role="main">
      <div className="container content-space-t-3 content-space-t-lg-5">
        <div className="w-lg-75 text-center mx-lg-auto">
          <div className="mb-5 mb-md-10">
            <h1 className="display-4">О нас</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur delectus
              doloremque dolores eius, eligendi illum vero. Ab distinctio doloremque explicabo
              magnam maxime officia optio possimus, suscipit tempora.
            </p>
          </div>
        </div>

        <div className="row gx-3">
          <div className="col mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img7})`, height: '15rem' }}
            />
          </div>

          <div className="col-3 d-none d-md-block mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img6})`, height: '15rem' }}
            />
          </div>

          <div className="col mb-3">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img14})`, height: '15rem' }}
            />
          </div>

          <div className="w-100" />

          <div className="col mb-3 mb-md-0">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img25})`, height: '15rem' }}
            />
          </div>

          <div className="col-4 d-none d-md-block mb-3 mb-md-0">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img16})`, height: '15rem' }}
            />
          </div>

          <div className="col">
            <div
              className="bg-img-start"
              style={{ backgroundImage: `url(${img12})`, height: '15rem' }}
            />
          </div>
        </div>
      </div>
      <div className="container content-space-2 content-space-lg-3">
        <div className="row justify-content-lg-center">
          <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
            <div className="text-center">
              <h2 className="display-4">3</h2>
              <p className="small">проекта</p>
            </div>
          </div>
          <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
            <div className="text-center">
              <h2 className="display-4">100+</h2>
              <p className="small">волонтеров</p>
            </div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <div className="text-center">
              <h2 className="display-4">85%</h2>
              <p className="small">чегонибудьеще</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top mx-auto" style={{ maxWidth: '25rem' }} />

      <div className="container content-space-2 content-space-lg-3">
        <div className="row justify-content-lg-between">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2>Информация об организации</h2>
          </div>

          <div className="col-lg-6">
            <p>
              Направления деятельности
            </p>
            <p>
              Рассказываем, чем занимается организация,
              какая цель у организации, какое направление деятельности.
              Рассказываем, чем занимается организация,
              какая цель у организации, какое направление деятельности.
              Рассказываем, чем занимается организация,
              какая цель у организации, какое направление деятельности.
              Рассказываем, чем занимается организация,
              какая цель у организации, какое направление деятельности.
            </p>
          </div>
        </div>
      </div>

      <div className="border-top mx-auto" style={{ maxWidth: '25rem' }} />

      <Partners />
    </main>
  );
}

export default About;
