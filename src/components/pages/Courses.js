import { Footer } from '../Footer';
import { Header } from '../Header';

export function Courses() {
  return (
    <>
      <Header />
      <section className="coursection">
        <article className="coursection__title">
          <a
            className="emailLink"
            href="mailto: cpadronsaludmental@gmail.com"
            title="Enviar un email"
          >
            Escríbeme aquí
          </a>{' '}
          <p className="coursection__title--subtitle">
            para tu primer Acompañamiento y cuéntame:
          </p>
          <ul className="coursection__listdata">
            <li className="coursection__listdata--item">Qué bono deseas</li>
            <li className="coursection__listdata--item">
              Diferencia horaria respecto a España
            </li>
            <li className="coursection__listdata--item">
              Disponibilidad horaria para citarnos
            </li>
          </ul>
          <p className="coursection__text">
            Y yo te responderé con las citas disponibles y los datos de pago
          </p>
        </article>
        <ul className="coursection__list">
          <li className="coursection__list--item display">
            Quiero dejar de hacer <span className="underline">masking.</span>{' '}
            <span className="price">Precio: 70€.</span>
          </li>
          <li className="coursection__list--item display">
            Cómo ser <span className="underline">(T)DAH/(T)EA </span>en el mundo
            laboral y no morir en el intento.{' '}
            <span className="price">Precio: 100€.</span>
          </li>
          <li className="coursection__list--item display">
            Relaciones <span className="underline">sexo-afectivas</span> y
            (T)DAH/(T)EA. <span className="price">Precio: 100€.</span>
          </li>
          <li className="coursection__list--item display">
            <span className="underline">Alimentación </span> y (T)DAH/(T)EA.{' '}
            <span className="price">Precio: 100€.</span>
          </li>
          {/* <li className="coursection__list--item">
           
            <p>Precios:</p>
            <ul className="coursection__listprices">
              <li className="coursection__listprices--price">
                1 sesión por 70€
              </li>
              <li className="coursection__listprices--price">
                4 sesiones por 260€
              </li>
              <li className="coursection__listprices--price">
                8 sesiones por 525€
              </li>
              <li className="coursection__listprices--price">
                15 sesiones por 980€
              </li>
            </ul>
          </li> */}
        </ul>
        <section className="aboutmelist">
          <p className="aboutmelist__text underline">
            Mis <span className="bold">Servicios Online</span> son los
            siguientes:
          </p>
          <br />
          <ul className="aboutmelist__list">
            <li className="aboutmelist__list--item">
              <span className="bold">Acompañamiento Emocional</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Autoconocimiento</span> como Autista/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Prevención de crisis</span> (Meltdown y
              Shutdown)
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Derivación</span> para el{' '}
              <span className="bold">diagnóstico</span>
            </li>
            <li className="aboutmelist__list--item">
              Mediación y Ed. <span className="bold">Afectivo-Sexual</span>
            </li>
            <li className="aboutmelist__list--item">
              Ed. <span className="bold">Familiar</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Alimentación</span> y (T)EA/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Maternidad</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="bold">Consciencia plena </span> y{' '}
              <span className="bold">compasión (mindfulness)</span>
            </li>
          </ul>
          <br />
          <p>
            De estos servicios pueden beneficiarse tanto adultos/as/es como
            menores.
          </p>
        </section>
        <a
          className="emailLink"
          href="mailto: cpadronsaludmental@gmail.com"
          title="Enviar un email"
        >
          Escríbeme aquí
        </a>{' '}
        para tu primer <span className="underline">Acompañamiento</span>{' '}
      </section>
      <Footer />
    </>
  );
}
