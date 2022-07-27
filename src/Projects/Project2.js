import { useEffect } from "react";
import { useUsersContext } from '../context'

function Project1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { state } = useUsersContext()

  return (
    <div
      className="container"
      style={{ marginTop: '90px' }}
    >
      <div
        className="bg-dark rounded-2 mx-3 mx-xl-1"
      >
        <div
          className="container-xl container-fluid content-space-1 content-space-md-2 px-4 px-md-8 px-lg-10"
        >
          <div className="px-3" />
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <span className="text-cap text-white-70">
              {state[1]?.title}
            </span>
            <h2 className="text-white">
              {state[1]?.description}
            </h2>
          </div>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={state[1]?.image}
              alt="dobro"
            />
          </div>
        </div>
      </div>
      <h3 className="py-3 mx-1">
        {state[0]?.header1}
      </h3>
      <p className="py-1 mx-1">
        {state[1]?.text1}
      </p>
      <h3 className="mx-1">
        {state[1]?.header2}
      </h3>
      <p className="py-1 mx-1">
        {state[1]?.text2}
      </p>
    </div>
  );
}

export default Project1;
