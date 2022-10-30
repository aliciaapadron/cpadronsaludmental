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
        </ul>
        <section className="aboutmelist">
          <p className="aboutmelist__text">
            Mis Servicios Online son los siguientes:
          </p>
          <br />
          <ul className="aboutmelist__list">
            <li className="aboutmelist__list--item">
              <span className="underline">Acompañamiento Emocional</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Autoconocimiento</span> como
              Autista/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Prevención de crisis</span> (Meltdown
              y Shutdown)
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Derivación</span> para el{' '}
              <span className="underline">diagnóstico</span>
            </li>
            <li className="aboutmelist__list--item">
              Mediación y Ed. <span className="underline">Afectivo-Sexual</span>
            </li>
            <li className="aboutmelist__list--item">
              Ed. <span className="underline">Familiar</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Alimentación</span> y (T)EA/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Maternidad</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Consciencia plena </span> y{' '}
              <span className="underline">compasión (mindfulness)</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Altas Capacidades </span>(AACC)
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Personas Altamente Sensibles </span>
              (PAS)
            </li>
          </ul>
          <br />
        </section>
        <section className="explanation">
          <br />
          <p>
            Durante nuestras sesiones te acompañaré a{' '}
            <span className="bold">conocer tu identidad</span>
            detrás del <span className="bold">masking</span>, a respetar tus
            <span className="bold">necesidades sensoriales</span>, a{' '}
            <span className="bold">practicar la compasión</span> contigo
            misma/o/e y a relacionarte exitosamente con tus seres queridos.
          </p>
          <br />
          <p className="italic underline">¿Cómo funciona?</p>
          <br />
          <p>
            El siguiente paso es responder a este mail comentándome tu
            <span className="bold">disponibilidad horaria</span> y{' '}
            <span className="bold">diferencia horaria</span> respecto a España
            para agendar una <span className="bold">cita</span>.
          </p>
          <br />
          <p className="italic underline">¿Cuáles son los precios?</p>
          <br />
          <ul className="aboutmelist__list">
            <li className="aboutmelist__list--item">
              Cada sesión tiene una duración de
              <span className="green"> 1h</span> y su valor es de{' '}
              <span className="green">70 euros</span>.
            </li>
            <li className="aboutmelist__list--item">
              Bono 1: de <span className="green">4 sesiones</span> por{' '}
              <span className="green">260 euros</span> (
              <span className="underline">Ahorro de 20 euros</span>).
            </li>
            <li className="aboutmelist__list--item">
              Bono 2: de <span className="green">8 sesiones</span> por{' '}
              <span className="green">525€</span> (
              <span className="underline">ahorro de 35</span>).
            </li>
            <li className="aboutmelist__list--item">
              Bono 3: de <span className="green">15 sesiones</span> por{' '}
              <span className="green">980€</span> (
              <span className="underline">ahorro de 70 euros</span>, lo que
              equivale a una <span className="underline">sesión gratuita</span>
              ).
            </li>
          </ul>
          <br />
          <p>
            <span className="bold">Métodos de pago</span>: BIZUM y PayPal para
            España, Stripe para el resto de países.
          </p>
          <br />
          <p>
            Las sesiones de los bonos solo pueden espaciarse quincenalmente.
          </p>
          <br />
          <p className="italic underline">¿Cómo solemos trabajar?</p>
          <br />
          <p>
            Las citas se realizan mediante <span className="bold">Meet</span>,
            podrás acceder mediante un <span className="bold">link</span> que
            llegará a tu correo.
          </p>
          <br />
          <p>
            La frecuencia recomendada para vernos es{' '}
            <span className="bold">una vez a la semana</span>, sobre todo al
            principio, ya que durante esas citas sentaremos las bases de nuestra
            relación: crear el vínculo, conocerte…
          </p>
          <br />
          <p>
            Posteriormente y en función de tus intereses las citas pueden{' '}
            <span className="bold">espaciarse</span>.
          </p>
          <br />
          <p>
            <span className="bold">Antes</span> de nuestra{' '}
            <span className="bold">primera cita</span>, te enviaré un{' '}
            <span className="bold">formulario</span> que leeré antes de
            conocernos.
          </p>
          <br />
          <p>
            Agilizaremos el trabajo mediante{' '}
            <span className="bold">Tareas</span> entre citas (no son
            obligatorias).
          </p>
          <br />
          <p>
            Tendrás <span className="bold">acceso ilimitado</span> a comunicarte
            conmigo por <span className="bold">mail</span>, para contarme
            inquietudes, desahogarte…
          </p>
          <br />
          <p className="italic underline">
            ¿Cuál es el procedimiento si quiero un Diagnóstico?
          </p>
          <br />
          <p>
            Cuando te sientas preparada/o/e te{' '}
            <span className="bold">derivaré</span> a Patricia, Neuropsicóloga
            experta en (T)EA y (T)DAH. Sus diagnósticos son{' '}
            <span className="bold">válidos</span> también en{' '}
            <span className="bold">LATAM</span>. El{' '}
            <span className="green">precio</span> de cada sesión para el
            diagnóstico es de <span className="green">70 euros</span> y suelen
            requerirse al menos <span className="green">5 sesiones</span>.
          </p>
          <br />
        </section>
        <div className="writeme">
          <a
            className="contactlink writeme__link"
            href="mailto: cpadronsaludmental@gmail.com"
            title="Enviar un email"
            target="_blank"
            rel="noreferrer"
          >
            Escríbeme para tu primer Acompañamiento.
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
