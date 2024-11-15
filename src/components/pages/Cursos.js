import { Footer } from '../Footer';
import { Header } from '../Header';

import resumen2 from '../../images/resumen2.JPG';
import pulmones from '../../images/pulmones.png';

export function Cursos() {
  return (
    <>
      <Header />
      <div className="team__cards">
        <h1>Programa RESPIRA LIBRE 1:1</h1>
        <h2 style={{ fontStyle: 'italic' }}>
          Un viaje contigo para dejar de fumar y vapear
        </h2>
        <p>De Neurodivergente a Neurodivergente</p>
        <br />
        <div className="team__cards--text">
          <section className="cursossection">
            <section className="explanation">
              <p>Un programa de acompañamiento semanal en tiempo real</p>
              <br />
              <p>Para darte apoyo especializado en Medicina Integrativa</p>
              <br />
              <p>
                <strong>Pensado por mujeres Neurodivergentes</strong>
              </p>
              <br />
              <ul className="cursoslist__list">
                <div className="cursoslist__list--title">
                  <p> ¿Cómo está organizado?</p>{' '}
                  <p>
                    <strong>3 MESES DE DURACIÓN</strong>
                  </p>
                  <p>ENCUENTRO SEMANAL 1:1 CON LA DRA. MARU</p>
                </div>
                <br />
                <li className="cursoslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 1
                  </span>
                  : Preparándome para dejar de fumar.
                </li>
                <li className="cursoslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 2
                  </span>
                  : DÍA X y construcción de nuevos hábitos.
                </li>
                <li className="cursoslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    MES 3
                  </span>
                  : Una vida nueva RESPIRANDO LIBRE.
                </li>
              </ul>
              <br />
              <div>
                <p>
                  Te despedirás del hábito habiéndolo suplido por nuevas
                  costumbres y podrás disfrutar de otras maneras.
                </p>
                <br />
                <p>¡Te quedarás con el gusto de haberte cumplido a tí misma!</p>
              </div>
              <br />
              <ul className="cursoslist__list">
                <div className="cursoslist__list--title">
                  <p>
                    {' '}
                    ¿Cómo es el acompañamiento 1:1 en el Programa RESPIRA LIBRE?
                  </p>{' '}
                </div>
                <br />
                <li className="cursoslist__list--item">
                  Tendremos 12 encuentros 1:1, uno por semana de 30 minutos de
                  duración
                </li>
                <li className="cursoslist__list--item">
                  Incluye el E-Book Interactivo RESPIRA LIBRE que guiará nuestro
                  trabajo juntas
                </li>
                <li className="cursoslist__list--item">Vía Google Meet</li>
                <li className="cursoslist__list--item">
                  El seguimiento se mantendrá por vía Whatsapp durante los 3
                  meses de duración del Programa RESPIRA LIBRE
                </li>
              </ul>
              <br />
              <p>
                Estará disponible{' '}
                <a
                  className="emailLink"
                  href="mailto:medicinatudela@gmail.com"
                  title="Descargar"
                  target="_blank"
                  rel="noreferrer"
                >
                  el correo electrónico
                </a>{' '}
                para recibir dudas, reflexiones, comentarios.
              </p>
              <br />
            </section>
            <section>
              <img
                className="cursossection__img"
                src={pulmones}
                alt="Img"
                title="Img"
              />{' '}
              <img
                className="cursossection__img"
                src={resumen2}
                alt="Img"
                title="Img"
              />{' '}
            </section>
            <br />
            <section>
              <p>
                Valor del Programa RESPIRA LIBRE Acompañamiento 1:1 <br />
                <span>125 euros cada fase</span>
                <br />
                <span> Total: 375 euros</span>
              </p>
              <br />
              <ul className="cursoslist__list">
                <div className="cursoslist__list--title">
                  <p> Opciones de pago:</p>{' '}
                </div>
                <br />
                <li className="cursoslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Opción Parcial:
                  </span>{' '}
                  <br />
                  en tres pagos de 125 euros (uno cada mes).
                  <br />
                  <a
                    className="emailLink"
                    href="https://buy.stripe.com/dR618b99fddI4sE3cf"
                    title="Comprar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Compra aquí el primer mes.{' '}
                  </a>
                </li>
                <br />
                <li className="cursoslist__list--item">
                  <span
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                  >
                    Opción Total: <br />
                  </span>
                  CON DESCUENTO DEL 10% en un solo pago de 337.50 euros.
                  <br />
                  <a
                    className="emailLink"
                    href="https://buy.stripe.com/28odUXclr7Togbm3cg"
                    title="Comprar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Compra aquí el programa 1:1 COMPLETO con descuento del 10%.{' '}
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
