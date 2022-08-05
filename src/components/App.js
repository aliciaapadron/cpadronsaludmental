import '../styles/App.scss';
//rutas
import { Routes, Route } from 'react-router-dom';

//useState y useEffect

//componentes
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Courses } from './pages/Courses';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
