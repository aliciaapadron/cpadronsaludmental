import React, { useState } from 'react'; // Importamos useState
import minilogo from '../images/minilogo.png';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export function Header() {
  // Estado para controlar la apertura/cierre del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <div className="mainmenu__containermenu">
            <button
              className="mainmenu__containermenu--button"
              onClick={handleMenuToggle}
            >
              &#9776;
            </button>
          </div>
          <h1 className="header__containermenu--title">
            c.padron salud mental
          </h1>
        </div>
        <h2 className="header__subtitle">
          De neurodivergente a neurodivergente
        </h2>
        {/* Pasamos el estado isMenuOpen como prop */}
        <Menu isOpen={isMenuOpen} />
      </header>
    </>
  );
}
