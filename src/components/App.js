import '../styles/App.scss';
//rutas
import { Routes, Route } from 'react-router-dom';

//useState y useEffect

//componentes
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Courses } from './pages/Courses';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
