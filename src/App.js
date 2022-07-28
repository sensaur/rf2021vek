import { Routes, Route } from 'react-router-dom';
import About from "./About/About";
import Projects from "./Projects/Projects";
import NavBar from "./NavBar/NavBar";
import News from "./News/News";
import Contacts from "./Contacts/Contacts";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";
import Article from './Article/Article'
import ProjectDetail from "./Projects/ProjectDetail";
import Policy from "./Policy/Policy";

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
        <Route path="/projects/:id" element={<ProjectDetail />} />

        <Route path="/article/1" element={<Article />} />
        <Route path="/policy" element={<Policy />} />
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
// comment
