import { Footer } from '../Footer';
import { Header } from '../Header';

import croquis from '../../images/croquis.png';
import cigarro from '../../images/cigarro.png';
import resumen from '../../images/resumen.png';
import pulmones from '../../images/pulmones.png';
import calendario from '../../images/calendario.png';

export function Ebooks() {
  return (
    <>
      <Header />
      <div className="team__cards">
        <h1>E-Book RESPIRA LIBRE</h1>
        <h2 style={{ fontStyle: 'italic' }}>
          Un viaje contigo para dejar de fumar y vapear
        </h2>
        <br />
        <div className="team__cards--text">
          <section className="ebookssection">
            <section className="explanation">
              <p>
                Estás contemplando dejar de fumar/vapear o ya te has decidido a
                abandonar este hábito?
              </p>
              <br />
              <p> Si has decidido hacerlo por tu cuenta...</p>

              <br />
              <p>
                <strong>¡Este E-Book es para tí!</strong>
              </p>
              <br />
              <ul className="ebookslist__list">
                <div className="ebookslist__list--title">
                  <p> ¿Cómo está organizado?</p>{' '}
                  <p>
                    <strong>3 MESES DE DURACIÓN</strong>
                  </p>
                </div>
                <br />
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 1
                  </span>
                  : Preparándome para dejar de fumar.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 2
                  </span>
                  : DÍA X y construcción de nuevos hábitos.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 3
                  </span>
                  : Una vida nueva RESPIRANDO LIBRE.
                </li>
              </ul>
              <br />
              <p>
                Estará disponible{' '}
                <a
                  className="emailLink"
                  href="mailto:medicinatudela@gmail.com"
                  title="Descargar"
                >
                  el correo electrónico
                </a>{' '}
                para recibir dudas, reflexiones, comentarios.
              </p>
              <ul className="ebookslist__list">
                <div className="ebookslist__list--title">
                  <p> ¿Qué incluye?</p>{' '}
                </div>
                <br />
                <li className="ebookslist__list--item">
                  Más de 30 páginas de contenido
                </li>
                <li className="ebookslist__list--item">
                  Fuentes bibliográficas
                </li>
                <li className="ebookslist__list--item">
                  Te cuento mi experiencia como exfumadora
                </li>
                <li className="ebookslist__list--item">
                  GUIA DE ACTIVIDADES​ SEMANALES, ¡para mantener el foco! ​
                </li>
              </ul>
              <ul className="ebookslist__list">
                <div className="ebookslist__list--title">
                  <p> ¿Qué ventajas tiene?</p>{' '}
                </div>
                <br />
                <li className="ebookslist__list--item">
                  Puedes empezarlo cuando quieras
                </li>
                <li className="ebookslist__list--item">
                  Puedes retomarlo las veces que sea necesario{' '}
                </li>
                <li className="ebookslist__list--item">
                  Siempre puedes contactarme para aclarar dudas
                </li>
              </ul>
            </section>
            <section>
              <img
                className="ebookssection__img"
                src={calendario}
                alt="Img"
                title="Img"
              />{' '}
              <img
                className="ebookssection__img"
                src={pulmones}
                alt="Img"
                title="Img"
              />{' '}
              <img
                className="ebookssection__img"
                src={resumen}
                alt="Img"
                title="Img"
              />{' '}
              <img
                className="ebookssection__img"
                src={cigarro}
                alt="Img"
                title="Img"
              />{' '}
              <img
                className="ebookssection__img"
                src={croquis}
                alt="Img"
                title="Img"
              />{' '}
            </section>
            <br />
            <section>
              <p>Valor del E-book Interactivo RESPIRA LIBRE 35€</p>

              <a
                className="emailLink"
                href="https://www.medicinatudela.com/_files/ugd/ce63e2_c9b0dac9a3e5473dbc0b8e7022c825d4.pdf"
                title="Descargar"
                target="_blank"
                rel="noreferrer"
              >
                Descarga aquí el dossier del E-book
              </a>

              <br />
              <a
                className="emailLink"
                href=" https://buy.stripe.com/bIYbMPgBHddI5wI289"
                title="Comprar"
                target="_blank"
                rel="noreferrer"
              >
                Cómpralo aquí
              </a>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
