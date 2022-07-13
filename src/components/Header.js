import minilogo from '../images/logokiti.png';
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
            <li className="nav__list--item">artículos</li>
            <li className="nav__list--item">cursos</li>
            <li className="nav__list--item">sobre mí</li>
            <li className="nav__list--item">contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
