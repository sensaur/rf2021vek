// import img3 from "../img/160x160/img3.jpg";
import { useEffect } from "react";
import img33 from "../img/img33.jpeg";
import { numWord } from "../helpers/numWord";
// import img4 from "../img/160x160/img4.jpg";
// import img5 from "../img/1920x800/img5.jpg";
import img6 from "../img/img777.webp";
import rf21vek from "../img/rf21vek.webp"
import vstrecha from '../img/vstrecha.webp'

function Article() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const ONEDAY = 24 * 60 * 60 * 1000;
  const today = new Date()
  const dateOfArticle = new Date(2022, 3, 25)
  // dateOfArticle = new Date((dateOfArticle.setDate(today.getDate() - 10)))
  const days = Math.round(Math.abs(((today - dateOfArticle) / ONEDAY)))
  return (
    <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-2">
      <div className="w-lg-65 mx-lg-auto">
        <div className="mb-4">
          <h1 className="h2">
            Филантропия, фандрайзинг и наш опыт
          </h1>
          <h1 className="h3">
            Где брать деньги благотворительным фондам в 2022 году?
          </h1>
        </div>

        <div className="row align-items-sm-center mb-5">
          <div className="col-sm-7 mb-4 mb-sm-0">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-circle"
                  src={img33}
                  alt="ava"
                />
              </div>

              <div className="flex-grow-1 ms-3">
                <h5 className="mb-0">
                  <a
                    className="text-dark"
                    href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%81%D0%B2%D0%B8%D1%81%D1%82%D0%BE%D0%B2-9bb94222b/"
                  >
                    Алексей
                    Свистов
                  </a>
                </h5>
                <span
                  className="d-block small"
                >
                  {`${days} ${numWord(days, ['день', 'дня', 'дней'])} назад`}
                </span>
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
          Всем привет! Меня зовут Алексей Свистов и как человек активно развивающий свой бизнес —
          компанию “Экскурс груп”, чувствую потребность делать что-то полезное и в социальной среде.
          Тема благотворительности в России всегда была не очень популярной, а наша новая реальность
          и вовсе пошатнула данную сферу.
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
        <h1>Филантропия не в тренде?</h1>
        <p>
          Социальные сети — это мир, в котором каждый старается продемонстрировать лучшую версию
          себя. Успешный успех, развлекательный контент, различные новости — это то, что нам
          транслируется на ежедневной основе. На фоне этого привлечь читателя к благотворительности,
          рассказывать о нуждах и проблемах уязвимых слоев населения, не так уж просто.
        </p>
        <p>
          Только лишь небольшая часть людей интересуется благотворительностью и еще меньшая в ней
          участвует. Люди не могут находиться в постоянном контакте с проблемами, которые поднимают
          фонды, им проще сделать один раз пожертвование или подключить обязательные платежи, чтоб
          какая-то сумма списывалась раз в период, чем быть постоянно вовлеченными в повестку.
          Сегодня такой способ помощи, столкнулся с техническими проблемами, уход PayPal, Apple Pay
          и Google Pay, лишил многие фонды регулярных пожертвований.
        </p>
        <p>
          В связи с этим мне захотелось поделиться своим мнением насчет благотворительности, что
          побудило меня заняться этой деятельностью и каким образом мы помогаем незащищенным слоям
          населения.
        </p>
        <h3>Собственный благотворительный проект.</h3>
        <p>
          В 2018 году мы основали общероссийский союз общественных объединений содействия построению
          социального государства “Россия 21 век”.
        </p>
        <p>
          &quot;Россия 21 век&quot; является некоммерческой организацией, занимается
          благотворительной помощью, привлечением волонтеров и просто неравнодушных людей. Наша
          основная помощь направлена детям с инвалидностью и их родителям.
        </p>

        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Наш посыл заключается в том, что в социальном государстве, самые незащищенные слои
            населения должны получать помощь, социализироваться и вести полноценный образ жизни.
          </blockquote>
        </figure>
        <p>
          Благодаря нашим связям и опыту работы, мы привлекаем различных бизнесменов — наших
          единомышленников, неравнодушных людей, которые хотят помочь.
        </p>
        <p className="py-2">
          Мы занимаемся:
        </p>
        <ul className="list-py-2">
          <li>Оказанием медицинской помощи;</li>
          <li>Распределением детей в медучреждения, по необходимости и запросу;</li>
          <li>Помощью в реабилитации детей инвалидов;</li>
          <li>Социализацией детей, организацией различного досуга и мероприятий;</li>
          <li>Привлечением волонтеров для разносторонней помощи;</li>
        </ul>

        <p>
          &quot;Россия 21 век&quot; состоит из людей, которые работают в различных сферах и на
          общественных
          началах задействованы в нашей организации, они оказывают всестороннюю поддержку детям с
          инвалидностью и их родителям.
        </p>

        <h3>Откуда берутся деньги?</h3>

        <p>
          Мы занимаемся фандрайзингом, чтобы было понятнее, вы делаете пожертвование адресно, когда
          нужна какая-то определенная помощь, когда помощь оказана, вы получаете отчет.
          {' '}
          <b>
            Это —
            фандрайзинг.
          </b>
          {' '}
          То есть мы не проводим деньги через свою организацию, а направляем желающих
          оказать материальную помощь и они самостоятельно жертвуют определенную сумму на счет
          фонда. Таким образом мы активно поддерживаем благотворительные фонды, а также точечные
          проекты.
        </p>

        <h3>Центр Радуга</h3>

        <p>
          Много лет назад я познакомился с организацией помощи инвалидам детства «Досуговый центр
          Радуга». Меня заинтересовала деятельность центра, она направлена на то, чтобы дети с
          ограниченными возможностями могли проводить свой досуг, общаться со сверстниками в
          комфортной для них среде, получать помощь специалистов, отмечать праздники, получать
          социальную и материальную поддержку. С тех пор мы помогаем центру финансово, в преддверии
          праздников всегда дарим подарки и радуем детей, в силу наших возможностей.
        </p>

        <p>
          Такие центры достойны поддержки и уважения, ведь им не безразлична судьба детей с
          инвалидностью.
        </p>
        <div className="my-4 my-sm-8">
          <img
            className="img-fluid rounded-lg"
            src={vstrecha}
            alt="gty"
          />
        </div>
        <p className="text-center">Встреча с директором «Центра Радуга» Дмитриевой Валентиной Георгиевной.</p>

        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Привлечение средств и материальная помощь очень важна, но самое необходимое для детей
            инвалидов — это внимание и тепло человеческих сердец.
          </blockquote>
        </figure>
      </div>

      <div className="my-4 my-sm-8">
        <img
          className="img-fluid rounded-lg"
          src={rf21vek}
          alt="gty"
        />
      </div>

      <div className="w-lg-65 mx-lg-auto">
        <h3>Шахматный турнир и социализация.</h3>
        <p>
          Основная проблема заключается в том, что таким детям тяжело адаптироваться в социуме и
          очень часто весь их социум ограничивается кругом семьи. Социализация, является одним из
          самых важных инструментов для улучшения качества их жизни.
        </p>

        <p>
          До пандемии мы организовывали шахматные турниры среди детей инвалидов по слуху, в
          Белгороде, совместно с председателем Белгородской областной шахматной федерации – Ивановым
          Александром Александровичем. Белгород — мой родной город и я всегда стремлюсь помогать
          землякам.
        </p>
        <p>
          Из-за пандемии мы не могли организовывать подобные мероприятия. В наши планы входит
          организация их в будущем, такие мероприятия помогают детям находить друзей, развивать
          навыки общения и получать положительные эмоции.
        </p>

        <h3>Волонтерский портал</h3>
        <p>
          Как я писал выше, многие фонды, из-за ухода различных платежных сервисов, были лишены
          регулярных платежей. А так как идеология нашей организации в том, что
        </p>

        <p>
          До пандемии мы организовывали шахматные турниры среди детей инвалидов по слуху, в
          Белгороде, совместно с председателем Белгородской областной шахматной федерации – Ивановым
          Александром Александровичем. Белгород — мой родной город и я всегда стремлюсь помогать
          землякам.
        </p>
        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Благотворительность - это нечто большее, чем пожертвовать несколько рублей на счет фонда
            и забыть об этом.
          </blockquote>
        </figure>
        <p>
          Мы решили на базе сайта “Россия 21 век”, создать волонтерский портал, который станет
          связующим звеном между нуждающимися семьями с детьми инвалидами и волонтерами.
        </p>
        <p>
          Цель проекта в том, чтобы семьи могли получить помощь по запросу. Зачастую они нуждаются
          в самом элементарном и помочь им может каждый желающий.
        </p>

        <p className="py-2">
          <b>Как будет работать портал?</b>
        </p>
        <ul className="list-py-2">
          <li>Фонды предоставляют нам список семей.</li>
          <li>На сайте мы размещаем этот список с подробным описанием.</li>
          <li>
            Можно будет с ним ознакомиться, помочь вещами, продуктами, игрушками, оказать
            материальную помощь и так далее.
          </li>
          <li>
            Любой желающий сможет подать волонтерскую заявку, оставить свои контактные данные
            (почту или номер телефона) и указать какую помощь он готов оказать.
          </li>
          <li>Дальше наш оператор свяжется с волонтером и направит его на помощь нуждающимся.</li>
        </ul>

        <p>
          Мы хотим открыто рассказывать о проблемах детей и их семей, потому что из-за недостатка
          информации в социальных сетях и СМИ, некоторые люди не понимают насколько важна
          благотворительность и как она помогает менять жизни людей к лучшему.
        </p>
        <p>
          Я никого ни к чему не призываю, просто делюсь с вами принципами работы нашей организации,
          желании создать социальную ответственность и развивать эмпатию к нуждающимся.
        </p>
        <figure className="bg-light text-center p-7 my-7">
          <blockquote className="blockquote blockquote-lg">
            Мы привлекаем все больше людей к нашему общему делу, развиваемся и стремимся к
            глобальной — сделать так, чтобы дети с инвалидностью чувствовали себя полноценными
            членами нашего общества.
          </blockquote>
        </figure>

        <div className="mt-5">
          <div className="btn btn-soft-secondary btn-xs m-1">Благотворительность</div>
          <div className="btn btn-soft-secondary btn-xs m-1">Фонды</div>
          <div className="btn btn-soft-secondary btn-xs m-1">Экскурс групп</div>
        </div>

      </div>
    </div>
  );
}

export default Article;
