import { Routes, Route } from 'react-router-dom';
import About from "./About/About";
import Projects from "./Projects/Projects";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";
import Contacts from "./Contacts/Contacts";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Article from './Article/Article'
//
/// /////
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route path="/projects/1" element={<Project1 />} />
        <Route path="/projects/2" element={<Project2 />} />
        <Route path="/projects/3" element={<Project3 />} />
        <Route path="/article/1" element={<Article />} />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
        <Route
          path="/join"
          element={<Join />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
