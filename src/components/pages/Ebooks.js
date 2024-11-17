import { Footer } from '../Footer';
import { Header } from '../Header';

import croquis from '../../images/croquis.png';
import cigarro from '../../images/cigarro.png';
import resumen from '../../images/resumen.png';
import pulmones from '../../images/pulmones.png';
import calendario from '../../images/calendario.png';
import guia from '../../images/guia.JPG';
import guia2 from '../../images/guia2.JPG';

export function Ebooks() {
  return (
    <>
      <Header />
      <div className="team__cards">
        <h1>Guía de Supervivencia Neurodivergente</h1>
        <br />
        <div className="team__cards--text">
          <section className="ebookssection">
            <section className="explanation">
              <p>
                Te presento{' '}
                <strong>mi Guía de Supervivencia Neurodivergente</strong>: Un
                recurso que te ayudará a{' '}
                <strong>
                  desarrollar conciencia de tus necesidades y aprender a
                  regularte.
                </strong>{' '}
                Es <strong>interactiva</strong> y tiene{' '}
                <strong>ejercicios prácticos</strong>.
              </p>
              <br />
              <p>
                Esta Guía está escrita con{' '}
                <strong>lenguaje de invitación</strong> y no de imposición.
              </p>
              <br />
              <p>
                Es<strong> fácil de comprender y accesible</strong> en cuanto a
                vocabulario y tipografía.
              </p>
              <br />
              <p>
                Está escrita en <strong>femenino, masculino y neutro</strong>{' '}
                para respetar todas las <strong>identidades</strong>.
              </p>
              <br />
              <p>
                Las <strong>ideas principales</strong> están en{' '}
                <strong>negrita</strong> para facilitar la lectura.
              </p>
              <br />
              <p>En ella puedes encontrar ejercidos, ejemplos y material.</p>
              <br />
              <p>
                Puedes leerlo en el orden que prefieras y complementar la
                información que te falte con el resto de puntos.
              </p>
              <br />
              <p>
                Si eres ser querido o profesional de una persona
                neurodivergente, te ayudará a sentirte más cerca de ella,
                comprenderla y ofrecerle recursos de regulación.
              </p>
              <br />
              <ul className="ebookslist__list">
                <div className="ebookslist__list--title">
                  <p> ¿Qué contenido incluye?</p>{' '}
                  <p>
                    <strong>El índice que encontrarás es el siguiente:</strong>
                  </p>
                </div>
                <br />
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 1: Cucharitas.
                  </span>
                  En él explico la teoría de las cucharitas y cómo relacionarte
                  con ellas.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 2: Identificar emociones.
                  </span>
                  Éste es un recurso excelente para trabajar la alexitimia.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 3: Escuchar al cuerpo.
                  </span>
                  Para regular la propiocepción y la interocepción.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 4: Economizar energía.
                  </span>
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 5: Prevención de crisis.
                  </span>
                  Aquí te explico qué tipo de colapsos podemos experimentar.
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 6: Stimming.{' '}
                  </span>
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 7: Gestión de crisis.
                  </span>
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 8: Masking.
                  </span>
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 9: Mis derechos.
                  </span>
                </li>
                <li className="ebookslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Cap. 10: Afirmaciones positivas.
                  </span>
                </li>
              </ul>
              <br />
              <section className="guiasection">
                <img
                  className="ebookssection__img"
                  src={guia}
                  alt="Img"
                  title="Img"
                />{' '}
                <img
                  className="ebookssection__img"
                  src={guia2}
                  alt="Img"
                  title="Img"
                />{' '}
              </section>
            </section>
            <br />
            <section
              style={{
                border: 'solid 1px #63cbb2',
                marginBottom: ' 20px',
                padding: '30px',
              }}
            >
              <p>Valor del de la Guía de SUPERVIVENCIA NEURODIVERGENTE: 15€</p>

              <a
                className="emailLink"
                href="https://buy.stripe.com/dR66p58Z03ve5Ww28g"
                target="_blank"
                rel="noreferrer"
              >
                Aprende a cuidarte. Cómpralo aquí
              </a>

              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '14px',
                  paddingTop: '30px',
                }}
              >
                *Te enviaremos la Guía al correo que elijas en la plataforma de
                pagos manualmente en un plazo de 1 a 4 días laborables.
              </p>
            </section>
          </section>
        </div>
      </div>

      {/* EBOOK MARU */}
      <div className="team__cards" style={{ marginTop: '60px' }}>
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
            <section
              style={{
                border: 'solid 1px #63cbb2',
                marginBottom: ' 20px',
                padding: '30px',
              }}
            >
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

              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '14px',
                  paddingTop: '30px',
                }}
              >
                *Te enviaremos el ebook al correo que elijas en la plataforma de
                pagos manualmente en un plazo de 1 a 4 días laborables.
              </p>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
