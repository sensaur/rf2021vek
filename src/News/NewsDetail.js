import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Client from "../Contentful";
import Loader from "../Loader/Loader";
import { numWord } from "../helpers/numWord";

function NewsDetail() {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [state, setState] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [oneNews, setOneNews] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false)
  const formatData = (items) => {
    // console.log("items==>", items)
    const tempItems = items.map((item) => {
      // eslint-disable-next-line no-shadow
      const { id } = item.sys;
      const avatarUrl = item.fields.authorAvatar.fields.file.url
      const news = { ...item.fields, id, avatarUrl }
      return news
    })
    return tempItems
  }
  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "articles",
        order: "sys.createdAt",
      })
      // console.log("response.items==>", response.items)
      const news = formatData(response.items)
      setState(news);
      // console.log("news=>", news);
      (setLoader(false))
      setOneNews(news.filter((el) => el.id === id)[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoader(true);
    (async function resolve() {
      await getData();
    }());
    setTimeout(() => setLoader(false), 1e3)
  }, []);

  // console.log("loader", loader)
  // console.log(documentToReactComponents)
  // console.log(getData)
  // console.log(oneNews[0].headingShort)
  // console.log(id)
  console.log("state!!!=>>", state)
  // console.log("oneNews!!!=>>", oneNews)
  if (loader) {
    return <Loader />
  }

  const ONEDAY = 24 * 60 * 60 * 1000;
  const today = new Date()
  const dateOfArticle = new Date(2022, 6, 4)
  const days = Math.round(Math.abs(((today - dateOfArticle) / ONEDAY)))
  // console.log(oneNews.authorAvatar.fields.file.url)

  return (
    <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-2">
      <div className="w-lg-65 mx-lg-auto">
        <div className="mb-4">
          <h1 className="h2">
            {oneNews.header}
          </h1>
          <h1 className="h3">
            {oneNews.subHeader}
          </h1>
        </div>

        <div className="row align-items-sm-center mb-5">
          <div className="col-sm-7 mb-4 mb-sm-0">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-circle"
                  src={oneNews.avatarUrl}
                  alt="ava"
                />
              </div>

              <div className="flex-grow-1 ms-3">
                <h5 className="mb-0">
                  <a
                    className="text-dark"
                    href={oneNews.linkFromAvatar}
                  >
                    {oneNews.author}
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
              <span className="text-cap mb-0 me-2">{oneNews.company}</span>
            </div>
          </div>
        </div>
        {documentToReactComponents(oneNews.text1)}
      </div>
    </div>
  );
}

export default NewsDetail;
