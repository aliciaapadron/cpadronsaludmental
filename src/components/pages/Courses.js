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
              Una cita por <span className="green">80€ (66,11+IVA)</span>.
            </li>
            <li className="aboutmelist__list--item">
              Pack de <span className="green">2 citas </span> por{' '}
              <span className="green">160€ (132,23+IVA).</span>
            </li>
            <li className="aboutmelist__list--item">
              Pack de <span className="green">4 citas </span> por{' '}
              <span className="green"> 310€ (256,2+IVA)</span>, ahorras 10€.
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
            Las citas se realizan mediante{' '}
            <span className="bold">google Meet.</span> Cuando reciba el pago de
            la cita, te enviaré el{' '}
            <span className="bold">link de acceso. </span> Además la cita se
            añadirá automáticamente a tu{' '}
            <span className="bold">Calendario de Google</span>.
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
            <span className="bold">espaciarse</span>.
          </p>
          <br />
          <p>
            {' '}
            <span className="bold">Antes de nuestra </span>
            <span className="bold">primera cita , te enviaré un </span>
            <span className="bold">formulario que leeré antes de</span>{' '}
            conocernos.
          </p>

          <br />
          <p>
            La duración del proceso depende de{' '}
            <span className="bold">tus necesidades y objetivos</span>,
            generalmente para una primera detección de{' '}
            <span className="bold">
              Neurodivergencias, identificar retos y fortalezas, prevención de
              crisis
            </span>
            , etc, podríamos usar <span className="bold">10 citas</span> aprox.
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
          <p>
            Te brindaré información sobre las vías para conseguir el{' '}
            <span className="bold">Diagnóstico Formal</span> para que puedas
            elegir la opción que más se adapte a ti.
            <br />
            <span className="bold"> Prepararemos juntas/os/es</span> el proceso:{' '}
            <span className="bold">cuántas citas</span> suelen ser, cuáles
            suelen ser{' '}
            <span className="bold">
              más duras a nivel cognitivo y emocional
            </span>
            , herramientas de{' '}
            <span className="bold">regulación sobre el proceso</span>,
            explicación del <span className="bold">informe diagnóstico</span>...
            Además, te explicaré el proceso de{' '}
            <span className="bold">solicitud de Discapacidad</span> y cuáles
            podrían ser los retos.
          </p>
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
