import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Projects from "./Projects/Projects";

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
      </Routes>
    </>
  );
}

export default App;
