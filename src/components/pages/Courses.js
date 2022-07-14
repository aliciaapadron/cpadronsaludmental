import { Footer } from '../Footer';
import { Header } from '../Header';

export function Courses() {
  return (
    <>
      <Header />
      <section className="coursection">
        <h2 className="coursection__title">
          Aquí podrás encontrar los cursos, talleres y acompañamiento a los que
          podrás acceder. Si te interesa alguno, solo tienes que escribirme a mi
          email con el título del curso que te interesa, tu nombre, tus
          apellidos y un número de contacto y te informaré de cómo acceder a él
          y la forma de pago. <br />
          <a
            className="emailLink"
            href="mailto: cpadronsaludmental@gmail.com"
            title="Enviar un email"
          >
            Envíame un email.
          </a>
        </h2>
        <ul className="coursection__list">
          <li className="coursection__list--item">
            Un paso hacia mí misma: Dejar de hacer masking.{' '}
            <span className="price">Precio: 40€</span>.
          </li>
          <li>
            Cómo ser Neurodivergente en el mundo laboral y no morir en el
            intento.<span className="price">Precio: 40€</span>
          </li>
          <li className="coursection__list--item">
            Primera acercamiento: Si estás interesada en que te acompañe,{' '}
            <a
              className="emailLink"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
            >
              escríbeme un correo
            </a>{' '}
            contándome Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Provident dolor aliquid impedit, amet ducimus voluptate ex velit
            quasi, consectetur sed earum assumenda sint aut facilis! Porro minus
            voluptates dolore accusamus?{' '}
            <span className="price">Precio: 40€</span>
          </li>
          <li className="coursection__list--item">
            Una sesión <span className="price">Precio: 40€</span>
          </li>
          <li className="coursection__list--item">
            Bono de 4 sesiones <span className="price">Precio: 40€</span>
          </li>
          <li className="coursection__list--item">
            Si vives fuera de la zona europea, escríbeme para hablar de precios
            adaptados a tu zona.{' '}
            <a
              className="emailLink"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
            >
              Envíame un email.
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
