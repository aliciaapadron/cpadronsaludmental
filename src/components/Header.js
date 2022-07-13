import minilogo from '../images/minilogo.png';
import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <>
      <header className="header">
        <section className="container">
          <img
            className="container__minilogo"
            src={minilogo}
            alt="Logo cpadronsaludmental"
            title="Logo cpadronsaludmental"
          />
        </section>
        <h1 className="header__title">c.padronsaludmental</h1>
        <h2 className="header__subtitle">Acompañamiento neurodivergente</h2>
        <nav className="nav">
          <ul className="nav__list">
            <Link to="/articles" className="nav__link" title="Ir a ARTÍCULOS">
              <li className="nav__list--item">artículos</li>
            </Link>
            <Link to="/courses" className="nav__link" title="Ir a CURSOS">
              <li className="nav__list--item">cursos</li>
            </Link>
            <Link to="/about-me" className="nav__link" title="Ir a SOBRE MÍ">
              <li className="nav__list--item">sobre mí</li>
            </Link>
            <Link to="/contact" className="nav__link" title="Ir a CONTACTO">
              <li className="nav__list--item">contacto</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
