import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import About from "./About/About";

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
    </Routes>
  );
}

export default App;
