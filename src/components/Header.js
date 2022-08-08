import minilogo from '../images/minilogo.png';
import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <>
      <header className="header">
        <section className="container">
          <Link to="/">
            <img
              className="container__minilogo"
              src={minilogo}
              alt="Ir a la HOME"
              title="Ir a la HOME"
            />
          </Link>
        </section>
        <h1 className="header__title">c.padron salud mental</h1>
        <h2 className="header__subtitle">Acompañamiento neurodivergente</h2>
        <i className="menu fa-solid fa-bars"></i>
        <nav className="nav">
          <ul className="nav__list">
            <Link to="/articles" className="nav__link" title="Ir a ARTÍCULOS">
              <li className="nav__list--item">artículos</li>
            </Link>
            <Link to="/courses" className="nav__link" title="Ir a CURSOS">
              <li className="nav__list--item">cursos</li>
            </Link>
            <Link to="/aboutme" className="nav__link" title="Ir a SOBRE MÍ">
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
