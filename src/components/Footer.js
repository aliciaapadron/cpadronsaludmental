import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer__copy">
          <h2 className="footer__title">© August 2022 </h2>
          <a
            className="footer__link"
            href="https://aliciaapadron.github.io/portfolio/#/"
            target="_blank"
            title="Ir al creador"
            rel="noreferrer"
          >
            Alicia Padrón
          </a>
        </section>

        <ul className="footer__ul">
          <Link
            to="/privacypolicy"
            className="footer__link"
            title="Política de privacidad"
          >
            <li className="footer__list--item">Política de privacidad</li>
          </Link>
          <span className="footer__line">|</span>
          <Link
            to="/privacycookies"
            className="footer__link"
            title="Política de cookies"
          >
            <li className="footer__list--item">Política de cookies</li>
          </Link>
          <span className="footer__line">|</span>
          <Link to="/legaladvice" className="footer__link" title="Aviso legal">
            <li className="footer__list--item">Aviso legal</li>
          </Link>
          <span className="footer__line">|</span>
          <a
            href="https://www.ozoniaconsultores.es/lopdweb/?p_id=508"
            className="footer__link"
            title="Protección de datos"
          >
            <li className="footer__list--item">Protección de datos</li>
          </a>
        </ul>
      </footer>
    </>
  );
}
