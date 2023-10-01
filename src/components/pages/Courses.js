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
            Quiero dejar de hacer masking.{' '}
            <span className="price">Precio: 70€. </span>
          </li>
          <li className="coursection__list--item display">
            Cómo ser (T)DAH/(T)EA en el mundo laboral y no morir en el intento.{' '}
            <span className="price">Precio: 100€. </span>
          </li>
          <li className="coursection__list--item display">
            Relaciones sexo-afectivas y (T)DAH/(T)EA.{' '}
            <span className="price">Precio: 100€. </span>
          </li>
          <li className="coursection__list--item display">
            Alimentación y (T)DAH/(T)EA.{' '}
            <span className="price">Precio: 100€. </span>
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
              Acompañamiento Emocional desde el paradigma de las
              Neurodivergencias
            </li>
            <li className="aboutmelist__list--item">
              Autoconocimiento como Autista/(T)DAH
            </li>
            <li className="aboutmelist__list--item">
              Preveción y gestión de Crisis (Meltdown y Shutdown)
            </li>
            <li className="aboutmelist__list--item">Sexualidad</li>
            <li className="aboutmelist__list--item">Alimentación</li>
            <li className="aboutmelist__list--item">
              Derivación para el Diagnóstico
            </li>
            <li className="aboutmelist__list--item">Autocuidado </li>
            <li className="aboutmelist__list--item">
              Maternidad y preparación al embarazo
            </li>
            <li className="aboutmelist__list--item">
              Identificación de retos y fortalezas
            </li>
            <li className="aboutmelist__list--item">
              Detección de neurodivergencias
            </li>
            <li className="aboutmelist__list--item">
              Derivación para el diagnóstico
            </li>
            <li className="aboutmelist__list--item">
              Dificultades sensoriales
            </li>
            <li className="aboutmelist__list--item">Dejar de hacer masking</li>
            <li className="aboutmelist__list--item">
              Preparación del diagnóstico formal
            </li>
            <li className="aboutmelist__list--item">
              Informe para diagnóstico formal
            </li>
            <li className="aboutmelist__list--item">Asesoramiento laboral</li>
            <li className="aboutmelist__list--item">
              Adaptaciones y herramientas de gestión
            </li>
            <li className="aboutmelist__list--item">Relaciones sociales</li>
            <li className="aboutmelist__list--item">
              Preparación de retos (viajes, exámenes, entrevistas...)
            </li>
          </ul>
          <br />
          <ul className="aboutmelist__list">
            <h2 className="aboutmelist__list--title">Profesionales</h2>
            <li className="aboutmelist__list--item">
              Consultas de caso puntuales
            </li>
            <li className="aboutmelist__list--item">
              Grupo de Consultas de caso (grupo reducido)
            </li>
          </ul>
          <br />
        </section>
        <section className="explanation">
          <br />
          <p>
            Durante nuestras sesiones te acompañaré a{' '}
            <span className="bold">conocer tu identidad detrás del </span>
            <span className="bold">masking , a respetar tus </span>
            <span className="bold">necesidades sensoriales , a </span>
            <span className="bold">
              practicar la compasión contigo misma/o/e y a relacionarte
              exitosamente con tus seres queridos.
            </span>
          </p>
          <br />
          <p className="italic underline">¿Cómo funciona?</p>
          <br />
          <p>
            El primer paso es escribir a este{' '}
            <a
              className="contactlink writeme__link"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
              target="_blank"
              rel="noreferrer"
            >
              email
            </a>{' '}
            comentándome tu{' '}
            <span className="bold">disponibilidad horaria y </span>
            <span className="bold">diferencia horaria </span> respecto a España
            para agendar una <span className="bold">cita .</span>
          </p>
          <br />
          <p className="italic underline">¿Cuáles son los precios?</p>
          <br />
          <ul className="aboutmelist__list">
            <li className="aboutmelist__list--item">
              Cada sesión dura
              <span className="green"> 1h y su valor es de </span>
              <span className="green">75 euros*</span>.
            </li>
            <li className="aboutmelist__list--item">
              Bono de <span className="green">4 citas </span> por{' '}
              <span className="green">290€ </span> ( ahorro de 10€ ). Las citas
              del bono serán semanales o quincenales.
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
            <span className="bold">
              Métodos de pago : BIZUM y Transferencia para España, Stripe para
              el resto de países.
            </span>
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
            <span className="bold">Meet </span>.
          </p>
          <br />
          <p>
            La frecuencia recomendada para vernos es{' '}
            <span className="bold">una vez a la semana</span> , sobre todo al
            principio, ya que durante esas citas sentaremos las bases de nuestra
            relación: crear el vínculo, conocerte…
          </p>
          <br />
          <p>
            Posteriormente y en función de tus intereses las citas pueden{' '}
            <span className="bold">espaciarse </span>.
          </p>
          <br />
          <p>
            <span className="bold">Antes de nuestra </span>
            <span className="bold">primera cita , te enviaré un </span>
            <span className="bold">formulario que leeré antes de</span>
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
            conmigo por <span className="bold">mail</span> , para contarme
            inquietudes, desahogarte…
          </p>
          <br />
          <p className="italic underline">
            ¿Cuál es el procedimiento si quiero un Diagnóstico?
          </p>
          <br />
          <p>
            Cuando te sientas preparada/o/e te derivaré al{' '}
            <span className="bold">equipo de Neuropsicología. </span> Te
            realizaré un informe con mis observaciones durante nuestro trabajo
            juntas/os/es que servirá a las{' '}
            <span className="bold">Neuropsicólogas</span> como base para vuestro
            proceso.
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
          <p className="note">*Impuestos incluidos</p>
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
