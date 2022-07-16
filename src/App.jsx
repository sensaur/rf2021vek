import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Projects from "./Projects/Projects";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <NavBar />
            <About />
          </div>
          )}
      />
      <Route
        path="/projects"
        element={(
          <div>
            <NavBar />
            <Projects />
          </div>
            )}
      />
    </Routes>
  );
}

export default App;
