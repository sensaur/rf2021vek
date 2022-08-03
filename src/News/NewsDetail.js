import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Client from "../Contentful";
import Loader from "../Loader/Loader";
import { numWord } from "../helpers/numWord";

// eslint-disable-next-line react/prop-types
function Blockquote({ children }) {
  return (
    <figure className="bg-light text-center p-7 my-7">
      <blockquote
        className="blockquote blockquote-lg text-start"
        style={{ fontSize: "1rem" }}
      >
        {children}
      </blockquote>
    </figure>
  )
}

const options = {
  renderMark: {
    // bold: (text) => <Blockquote>{text}</Blockquote>,
  },
  renderNode: {
    blockquote: (node, children) => <Blockquote>{children}</Blockquote>,
  },

};

function NewsDetail() {
  const { id } = useParams()

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  const [oneNews, setOneNews] = useState({})
  const [loader, setLoader] = useState(false)
  const formatData = (items) => items.map((item) => {
    const idFromServer = item.sys.id;
    // const avatarUrl = item.fields.authorAvatar.fields.file.url
    const image1Url = item.fields.image1?.fields.file.url
    const image2Url = item.fields.image2?.fields.file.url
    const image3Url = item.fields.image3?.fields.file.url
    const image4Url = item.fields.image4?.fields.file.url
    const image5Url = item.fields.image5?.fields.file.url
    const image6Url = item.fields.image6?.fields.file.url
    const image7Url = item.fields.image7?.fields.file.url
    if (item.fields.authorAvatar) {
      const avatarUrl = item?.fields.authorAvatar.fields.file.url
      return {
        ...item.fields,
        id: idFromServer,
        avatarUrl,
        image1Url,
        image2Url,
        image3Url,
        image4Url,
        image5Url,
        image6Url,
        image7Url,
      }
    }
    return {
      ...item.fields,
      id: idFromServer,
      image1Url,
      image2Url,
      image3Url,
      image4Url,
      image5Url,
      image6Url,
      image7Url,
    }
  })
  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "articles",
        order: "sys.createdAt",
      })
      const news = formatData(response.items);
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

  if (loader) {
    return <Loader />
  }

  const ONEDAY = 24 * 60 * 60 * 1000;
  const today = new Date()
  const dateOfArticle = new Date(2022, 6, 4)
  const days = Math.round(Math.abs(((today - dateOfArticle) / ONEDAY)))

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
              {/* {oneNews.avatarUrl ? console.log("have") : console.log("absent")} */}
              {oneNews.avatarUrl

                ? (
                  <>
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
                  </>
                )
                : (
                  <span
                    className="d-block small"
                  >
                    {`${days} ${numWord(days, ['день', 'дня', 'дней'])} назад`}
                  </span>
                )}
            </div>
          </div>
          {documentToReactComponents(oneNews.text1, options)}
        </div>
      </div>
      {oneNews.image1Url ? (
        <div className="my-4 my-sm-8">
          <img
            className="img-fluid rounded-lg"
            src={oneNews.image1Url}
            alt="pic"
          />
        </div>
      )
        : ""}
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text2, options)}
        {oneNews.image2Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image2Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text3, options)}
        {oneNews.image3Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image3Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text4, options)}
        {oneNews.image4Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image4Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text5, options)}
        {oneNews.image5Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image5Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text6, options)}
        {oneNews.image6Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image6Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
      <div className="w-lg-65 mx-lg-auto">
        {documentToReactComponents(oneNews.text7, options)}
        {oneNews.image7Url ? (
          <div className="my-4 my-sm-8 text-center">
            <img
              className="img-fluid rounded-lg"
              style={{ maxHeight: "400px" }}
              src={oneNews.image7Url}
              alt="pic"
            />
          </div>
        )
          : ""}
      </div>
    </div>
  );
}

export default NewsDetail;
