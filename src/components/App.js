import '../styles/App.scss';
// rutas
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// componentes
import { Home } from './pages/Home';
import { Diagnostic } from './pages/Diagnostic';
import { Team } from './pages/Team';
import { Articles } from './pages/Articles';
import { Courses } from './pages/Courses';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';

// GTM
import TagManager from 'react-gtm-module';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { LegalAdvise } from './pages/LegalAdvice';
import { PrivacyCookies } from './pages/PrivacyCookies';

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MS3F9JS' });
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/team" element={<Team />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legaladvice" element={<LegalAdvise />} />
          <Route path="/privacycookies" element={<PrivacyCookies />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
