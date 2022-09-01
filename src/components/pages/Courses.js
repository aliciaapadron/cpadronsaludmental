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
            Escríbeme un email
          </a>{' '}
          <p className="coursection__title--subtitle">
            con los servicios que te interesen
          </p>
          y los siguientes datos:
          <ul className="coursection__listdata">
            <li className="coursection__listdata--item">Servicio que deseas</li>
            <li className="coursection__listdata--item">Nombre</li>
            <li className="coursection__listdata--item">Apellidos</li>
            <li className="coursection__listdata--item">Teléfono</li>
          </ul>
          <p className="coursection__text">
            Y yo te responderé con el método de pago y las especificaciones para
            acceder
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
          <li className="coursection__list--item">
            <a
              className="emailLink"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
            >
              Escríbeme aquí
            </a>{' '}
            para tu primer <span className="underline">Acompañamiento</span>{' '}
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
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
