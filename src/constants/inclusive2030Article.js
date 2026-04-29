/**
 * Превью статической страницы public/news/inklyuzivnoe-obshhestvo-2030/index.html.
 * Переход только через <a href>, не React Router — иначе перехватит /news/:id.
 */
const inclusive2030Article = {
  href: `${process.env.PUBLIC_URL}/news/inklyuzivnoe-obshhestvo-2030/`,
  img: `${process.env.PUBLIC_URL}/img/inklyuzivnoe-obshhestvo-2030-og.jpg`,
  heading:
    'Инклюзивное общество 2030 — программа интеграции людей с ОВЗ',
  description:
    'Программа «Инклюзивное общество 2030» — 6 проектов по включению людей с ограниченными возможностями здоровья в социальную жизнь России.',
  datePublication: '2026-04-29',
};

export default inclusive2030Article;
