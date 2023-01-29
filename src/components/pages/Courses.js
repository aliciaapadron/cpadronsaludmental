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
            Atiendo online y mis servicios son los siguientes:
          </p>
          <br />
          <ul className="aboutmelist__list">
            <h2 className="aboutmelist__list--title">
              Personas Neurodivergentes o que sospechen serlo:
            </h2>
            <li className="aboutmelist__list--item">
              Acompañamiento Emocional
              <span className="underline">
                desde el paradigma de las Neurodivergencias
              </span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Autoconocimiento</span> como
              Autista/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Preveción y gestión de Crisis</span>{' '}
              (Meltdown y Shutdown)
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Socialización</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Sexualidad</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Alimentación</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Derivación para el</span> Diagnóstico
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">"Funcionalidad"</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Autocuidado</span>{' '}
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Maternidad</span>
            </li>
          </ul>
          <br />
          <ul className="aboutmelist__list">
            <h2 className="aboutmelist__list--title">
              Ma/padres y parejas de personas Neurodivergentes
            </h2>
            <li className="aboutmelist__list--item">
              <span className="underline">Asesoramiento</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Educación y Mediación familiar</span>
            </li>
          </ul>
          <br />
          <ul className="aboutmelist__list">
            <h2 className="aboutmelist__list--title">
              Ma/padres y parejas de personas Neurodivergentes
            </h2>
            <li className="aboutmelist__list--item">
              <span className="underline">Asesoramiento</span>
            </li>
            <li className="aboutmelist__list--item">
              <span className="underline">Educación y Mediación familiar</span>
            </li>
          </ul>
          <br />
        </section>
        <section className="explanation">
          <br />
          <p>
            Durante nuestras sesiones te acompañaré a{' '}
            <span className="bold">conocer tu identidad</span> detrás del{' '}
            <span className="bold">masking</span>, a respetar tus{' '}
            <span className="bold">necesidades sensoriales</span>, a{' '}
            <span className="bold">practicar la compasión</span> contigo
            misma/o/e y a relacionarte exitosamente con tus seres queridos.
          </p>
          <br />
          <p className="italic underline">¿Cómo funciona?</p>
          <br />
          <p>
            El primer paso es responder a este mail comentándome tu{' '}
            <span className="bold">disponibilidad horaria</span> y{' '}
            <span className="bold">diferencia horaria</span> respecto a España
            para agendar una <span className="bold">cita</span>.
          </p>
          <br />
          <p className="italic underline">¿Cuáles son los precios?</p>
          <br />
          <ul className="aboutmelist__list">
            <li className="aboutmelist__list--item">
              Cada sesión dura
              <span className="green"> 1h</span> y su valor es de{' '}
              <span className="green">75 euros</span>.
            </li>
            <li className="aboutmelist__list--item">
              Bono de <span className="green">4 citas</span> por{' '}
              <span className="green">290€</span> (
              <span className="underline"> ahorro de 10€</span>). Las citas del
              bono serán semanales o quincenales.
            </li>
            <li className="aboutmelist__list--item">
              Tarifa reducida (a pactar si hay plazas disponibles).
            </li>
            <li className="aboutmelist__list--item">
              Tarifa Solidaria 80€/cita (de los cuales 5€ se destinarán a cubrir
              tarifas reducidas, haciendo de esto un proceso colectivo de
              conciencia de clase y privilegios).
            </li>
          </ul>
          <br />
          <p>
            <span className="bold">Métodos de pago</span>: BIZUM y PayPal para
            España, Stripe para el resto de países.
          </p>
          <br />
          <br />
          <p className="italic underline">¿Cómo solemos trabajar?</p>
          <br />
          <p>
            Nuestra cita se añadirá{' '}
            <span className="bold">
              automáticamente a tu calendario de google
            </span>
            , podrás acceder mediante un <span className="bold">link</span> que
            llegará a tu correo, y se realizarán mediante{' '}
            <span className="bold">Meet</span>.
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
            Cuando te sientas preparada/o/e te derivaré al{' '}
            <span className="bold">equipo de Neuropsicología.</span> Te
            realizaré un informe con mis observaciones durante nuestro trabajo
            juntas/os/es que servirá a las{' '}
            <span className="bold">Neuropsicólogas</span> como base para vuestro
            proceso.
          </p>{' '}
          <br />
          <p>
            Las <span className="bold">sesiones de Evaluación</span> suelen
            durar 1:30h y suelen requerirse 4 sesiones para realizar el
            diagnóstico de una Condición/Neurotipo. Generalmente se realiza en
            la misma semana.
          </p>{' '}
          <br />
          <p>
            Realizan evaluaciones de
            <span className="bold">
              {' '}
              Altas Capacidades, Autismo, (T)DAH, Discalculia, Desorden del
              procesamiento sensorial, Funciones Ejecutivas, TOC, Depresión...
            </span>
          </p>{' '}
          <br />
          <p>
            En los casos en los que sea necesario evaluar{' '}
            <span className="bold">
              {' '}
              más condiciones, co-ocurrencias o realizar diagnóstico diferencial
            </span>
            , se necesitarán más sesiones. El equipo de{' '}
            <span className="bold">Neuropsicólogas ofrece un pack</span> para
            estas situaciones que suele incluir: todas las sesiones necesarias,
            evaluación sensorial, de las funciones ejecutivas, evaluación de
            co-ocurrencias, inteligencia, evaluacion diferencial...
          </p>
          <br />
          <p className="italic underline">
            ¿Y si quiero el diagnóstico pero no puedo trabajar contigo?
          </p>
          <br />
          <p>
            {' '}
            <a
              className="contactlink writeme__link"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
              target="_blank"
              rel="noreferrer"
            >
              Escrímebe un mail
            </a>{' '}
            pidiéndome los datos para la Evaluación diagnóstica, y te mandaré
            toda la información.
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
