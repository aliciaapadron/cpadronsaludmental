import { Footer } from '../Footer';
import { Header } from '../Header';

export function Courses() {
  return (
    <>
      <Header />
      <section className="coursection">
        <article className="coursection__title">
          Aquí tienes los servicios a los que puedes acceder. <br />{' '}
          <a
            className="emailLink"
            href="mailto: cpadronsaludmental@gmail.com"
            title="Enviar un email"
          >
            Envíame un email
          </a>{' '}
          con los siguientes datos:
          <ul>
            <li>Servicio que deseas</li>
            <li>Nombre</li>
            <li>Apellidos</li>
            <li>Teléfono</li>
          </ul>
          <p>
            Y yo te responderé con el método y pago y las especificaciones para
            acceder
          </p>
        </article>
        <ul className="coursection__list">
          <li className="coursection__list--item">
            Quiero dejar de hacer masking.{' '}
            <span className="price">Precio: 70€.</span>
          </li>
          <li className="coursection__list--item">
            Cómo ser (T)DAH/(T)EA en el mundo laboral y no morir en el intento.
            <span className="price">Precio: 100€.</span>
          </li>
          <li className="coursection__list--item">
            Relaciones sexo-afectivas y (T)DAH/(T)EA.
            <span className="price">Precio: 100€.</span>
          </li>
          <li className="coursection__list--item">
            Alimentación y (T)DAH/(T)EA.
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
            para tu primer Acompañamiento <p>Precios:</p>
            <ul>
              <li className="price">Valor de una sesión: 70€</li>
              <li className="price">4 por 260€</li>
              <li className="price">8 por 525€</li>
              <li className="price">15 por 980€</li>
            </ul>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
