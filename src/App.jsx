import { Routes, Route } from 'react-router-dom';
import About from "./About/About";
import Projects from "./Projects/Projects";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";
import Volunteers from "./Volunteers/Volunteers";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <About />
            </div>
          )}
        />
        <Route
          path="/projects"
          element={(
            <div>
              <Projects />
            </div>
          )}
        />
        <Route
          path="/news"
          element={(
            <div>
              <News />
            </div>
          )}
        />
        <Route
          path="/volunteers"
          element={(
            <div>
              <Volunteers />
            </div>
          )}
        />
      </Routes>
    </>
  )
}

export default App;
