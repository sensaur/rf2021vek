import { Link } from "react-router-dom";
import img3 from "../img/160x160/img3.jpg";
// import img4 from "../img/160x160/img4.jpg";
import img5 from "../img/1920x800/img5.jpg";
import img6 from "../img/img777.webp";

function Article() {
  return (
    <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-2">
      <div className="w-lg-65 mx-lg-auto">
        <div className="mb-4">
          <h1 className="h2">
            Все уйдут, а я останусь.
          </h1>
          <h1 className="h3">
            Убил ли уход иностранных компаний доставку
            банковских карт?
          </h1>
        </div>

        <div className="row align-items-sm-center mb-5">
          <div className="col-sm-7 mb-4 mb-sm-0">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-circle"
                  src={img3}
                  alt="ava"
                />
              </div>

              <div className="flex-grow-1 ms-3">
                <h5 className="mb-0">
                  <Link className="text-dark" to="/#ceo">Алексей Свистов</Link>
                </h5>
                <span className="d-block small">1 day ago</span>
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="d-flex justify-content-sm-end align-items-center">
              <span className="text-cap mb-0 me-2">Экскурс групп</span>
            </div>
          </div>
        </div>

        <p>
          Привет! Меня зовут Алексей Свистов, я - генеральный директор компании “Экскурс груп”, мы
          занимаемся доставкой финансовых и банковских продуктов с идентификацией.
        </p>
      </div>

      <div className="my-4 my-sm-8">
        <img
          className="img-fluid rounded-lg"
          src={img6}
          alt="pic"
        />
      </div>

      <div className="w-lg-65 mx-lg-auto">
        <p>
          На волне массовых уходов компаний и сервисов из России, я хочу поделиться опытом,
          насколько целесообразно использование собственных разработок и сервисов. В статье
          расскажу с чем столкнулась наша компания, на примере нескольких кейсов.
        </p>
        <p>
          К сожалению, отсутствие конкретики в названиях компаний, модулей и программ, связаны
          непреложным обетом NDA между нами и клиентами, однако и без того мой посыл будет понятен
          и полезен.
        </p>
        <h3>Стандарты шифрования</h3>
        <p>
          Наша работа напрямую связана с идентификацией. Для проекта одного крупного банка, по
          техническому заданию, требовался определенный алгоритм протокола шифрования данных. На
          рынке было много предложений от зарубежных компаний. Но мы решили не использовать чьи-то
          решения, а разработать свое.
        </p>
        <p>
          Было понимание, что это требует вложения дополнительных ресурсов и времени, но учитывая
          сегодняшнюю ситуацию, вложение оказалось удачным.
        </p>

        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Мы разработали собственный алгоритм применения необходимого типа шифрования, без
            использования решений сторонних производителей.
          </blockquote>
        </figure>
        <p className="py-2">
          Целью разработки собственного алгоритма было:
        </p>
        <ul className="list-py-2">
          <li>упрощение интеграции;</li>
          <li>уменьшение зависимости от зарубежных компаний;</li>
          <li>уменьшение расходов на оплату их услуг.</li>
        </ul>

        <p>
          Мы использовали собственную разработку и проекты наших клиентов получили конкурентное
          преимущество, они не несут потерь в текущей ситуации на рынке.
        </p>

        <h3>Иностранное ПО</h3>

        <p>
          До недавнего времени, наша компания использовала, для упрощения определенных процессов,
          стороннее программное решение. Оно помогало ускорить взаимодействие выездного
          представителя с клиентом, но когда компании начали уходить с рынка, оно стало нам
          недоступно.
        </p>

        <p>
          Мы были вынуждены экстренно искать замену, не найдя альтернативную программу на
          российском рынке, пришлось выделить бюджет и потратить дополнительное время, чтобы
          создать собственный аналог.
        </p>

        <h3>CRM системa</h3>

        <p>
          Еще один кейс связан с нашим крупным клиентом. Работа его логистики была выстроена через
          SAP, как в его головной компании, но мы настояли на использовании российского сервиса.
          Наши технические специалисты оказали клиенту поддержку и настроили всё “под ключ”, что
          позволило без проблем использовать предложенный российский аналог.
        </p>

        <p>
          Такой выбор обусловлен, особенностями законодательства в сфере персональных данных в
          России, хотя использование российского софта не казалось нам надежным. Но когда
          зарубежные компании и сервисы перестали работать в России, клиент вернулся к нам с
          благодарностью, так как у них все работало без проблем и ни один проект не сорвался.
        </p>

        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Последний месяц четко дал понять, что иностранные компании и партнеры могут ограничить
            доступ к своим продуктам и программам, могут изменить условия пользования сервисами, а
            серверы в других странах, в любой момент, могут отключиться.
          </blockquote>
        </figure>
      </div>

      <div className="my-4 my-sm-8">
        <img
          className="img-fluid rounded-lg"
          src={img5}
          alt="gty"
        />
      </div>

      <div className="w-lg-65 mx-lg-auto">
        <p>
          Снижение рисков в бизнесе сегодня получило новый вектор развития, если раньше
          предприниматель должен был думать только о возможностях поставщиков и их условиях
          работы, то сегодня нужно учитывать юрисдикцию поставщиков, историю и состав их
          сотрудников, чтобы избежать проколов и утечек, как у Желтой компании по доставке
          еды.
        </p>

        <p>
          Стоит ли вкладываться в собственную разработку или нет, судите сами. Я поделился своим
          опытом, почему наша компания приняла решение вкладывать много ресурсов в разработку
          информационных технологий и усиленно развивает это направление.
        </p>
        <p>
          Нас это привело к
          <Link className="link" to="/">&nbsp;результату&nbsp;</Link>
        </p>

        {/* <div className="card bg-dark text-center my-4"> */}
        {/*  <div className="card-body"> */}
        {/*    <h4 className="text-white mb-4"> */}
        {/*      Like what youre reading? Subscribe to our top */}
        {/*      stories. */}
        {/*    </h4> */}

        {/*    <div className="w-lg-75 mx-lg-auto"> */}
        {/*      /!* eslint-disable-next-line jsx-a11y/click-events-have-key-events, */}
        {/*     jsx-a11y/no-noninteractive-element-interactions *!/ */}
        {/*      <form onClick={() => console.log("hbjhbj")}> */}
        {/*        <div className="input-card input-card-sm border"> */}
        {/*          <div className="input-card-form"> */}
        {/*            <label htmlFor="subscribeForm" className="form-label visually-hidden"> */}
        {/*              Enter */}
        {/*              email */}
        {/*            </label> */}
        {/*            <input */}
        {/*              type="text" */}
        {/*              className="form-control" */}
        {/*              id="subscribeForm" */}
        {/*              placeholder="Enter email" */}
        {/*              aria-label="Enter email" */}
        {/*            /> */}
        {/*          </div> */}
        {/*          <button type="button" className="btn btn-primary">Subscribe</button> */}
        {/*        </div> */}
        {/*      </form> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}

        <div className="mt-5">
          <Link className="btn btn-soft-secondary btn-xs m-1" to="/">Ecommerce</Link>
          <Link className="btn btn-soft-secondary btn-xs m-1" to="/">Website</Link>
          <Link className="btn btn-soft-secondary btn-xs m-1" to="/">Bootstrap</Link>
          <Link className="btn btn-soft-secondary btn-xs m-1" to="/">Startup</Link>
          <Link className="btn btn-soft-secondary btn-xs m-1" to="/">Free</Link>
        </div>

        {/* <div className="row justify-content-sm-between align-items-sm-center mt-5"> */}
        {/*  <div className="col-sm mb-2 mb-sm-0"> */}
        {/*    <div className="d-flex align-items-center"> */}
        {/*      <span className="text-cap mb-0 me-2">Share:</span> */}

        {/*      <Link */}
        {/*        className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" */}
        {/*        to="/" */}
        {/*      > */}
        {/*        <i className="bi-facebook" /> */}
        {/*      </Link> */}
        {/*      <Link */}
        {/*        className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" */}
        {/*        to="/" */}
        {/*      > */}
        {/*        <i className="bi-twitter" /> */}
        {/*      </Link> */}
        {/*      <Link */}
        {/*        className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" */}
        {/*        to="/" */}
        {/*      > */}
        {/*        <i className="bi-instagram" /> */}
        {/*      </Link> */}
        {/*      <Link */}
        {/*        className="btn btn-ghost-secondary btn-sm btn-icon rounded-circle me-2" */}
        {/*        to="/" */}
        {/*      > */}
        {/*        <i className="bi-telegram" /> */}
        {/*      </Link> */}
        {/*    </div> */}
        {/*  </div> */}

        {/*  <div className="col-sm-auto"> */}
        {/*    <Link */}
        {/*      className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" */}
        {/*      to="/" */}
        {/*      data-toggle="tooltip" */}
        {/*      data-placement="top" */}
        {/*      title="Bookmark story" */}
        {/*    > */}
        {/*      <i className="bi-bookmark" /> */}
        {/*    </Link> */}
        {/*    <Link */}
        {/*      className="btn btn-soft-secondary btn-sm btn-icon rounded-circle" */}
        {/*      to="/" */}
        {/*      data-toggle="tooltip" */}
        {/*      data-placement="top" */}
        {/*      title="Report story" */}
        {/*    > */}
        {/*      <i className="bi-flag" /> */}
        {/*    </Link> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Article;
