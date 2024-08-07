import minilogo from '../images/minilogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
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
        <div className="header__containermenu">
          <button
            className="header__containermenu--button"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="menu"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <h1 className="header__containermenu--title">
            c.padron salud mental
          </h1>
        </div>
        <h2 className="header__subtitle">
          De neurodivergente a neurodivergente
        </h2>
        <nav className="nav">
          <ul className={`nav__list ${menu ? 'isActive' : ''}`}>
            {/* <Link to="/articles" className="nav__link" title="Ir a ARTÍCULOS">
              <li className="nav__list--item">artículos</li>
            </Link> */}
            <Link
              to="/diagnostic"
              className="nav__link"
              title="Ir a DIAGNÓSTICOS"
            >
              <li className="nav__list--item">diagnósticos</li>
            </Link>
            <Link to="/team" className="nav__link" title="Ir a EQUIPO">
              <li className="nav__list--item">equipo</li>
            </Link>
            <Link to="/courses" className="nav__link" title="Ir a TARIFAS">
              <li className="nav__list--item">mis servicios</li>
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
