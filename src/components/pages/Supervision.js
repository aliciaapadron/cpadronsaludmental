import { Footer } from '../Footer';
import { Header } from '../Header';

export function Supervision() {
  return (
    <>
      <Header />

      <div className="team__cards">
        <h1>Supervisión a terapeutas</h1>

        <div className="team__cards--text">
          <section className="supervisionsection">
            <section className="explanation">
              <h2>
                Supervisión y consultas de caso para profesionales de la salud.{' '}
              </h2>
              <br />
              <ul className="aboutmelist__list">
                <p>
                  Pongo a tu disposición mi extensa formación y experiencia
                  acompañando a personas neurodivergentes así como detectando
                  sus neurodivergencias y co-ocurrencias.
                </p>
                <br />
                <p>
                  Con enfoque contextual, integrativo y perspectiva crítica.
                  Perspectiva informada en trauma (trauma complejo, ASI…),
                  feminista, antigordófoba, antirracista, anticapacitista,
                  amable con la comunidad LGTBIA+ y no monogamias.
                </p>
                <br />
                <h3 style={{ textDecoration: 'underline' }}>
                  Este servicio es para ti si:
                </h3>
                <br />
                <li className="aboutmelist__list--item">
                  Quieres incorporar la perspectiva en Neurodivergencias.
                </li>
                <li className="aboutmelist__list--item">
                  Dudas sobre cómo abordar un caso con una persona
                  neurodivergente.
                </li>
                <li className="aboutmelist__list--item">
                  Dudas sobre si tu acompañada/e/o tiene (t)DAH, Autismo, AACC,
                  todas las anteriores o ninguna.
                </li>
                <li className="aboutmelist__list--item">
                  Dudas sobre si tu acompañada es Neurodivergente o si sus
                  característica son debidas a trauma.
                </li>
                <li className="aboutmelist__list--item">
                  Dudas sobre qué herramientas necesita tu acompañada/e/o.
                </li>
                <li className="aboutmelist__list--item">
                  Te sientes atascada con un caso.
                </li>
                <li className="aboutmelist__list--item">
                  Necesitas información sobre cómo intersecciona la
                  neurodivergencia con otras experiencias.
                </li>
                <li className="aboutmelist__list--item">
                  Dudas sobre qué plan de trabajo elegir.
                </li>
                <li className="aboutmelist__list--item">
                  Un caso te toca personalmente y te cuesta abordarlo.
                </li>
                <li className="aboutmelist__list--item">
                  Necesitas seguridad, información y herramientas.
                </li>
              </ul>
              <ul className="aboutmelist__list">
                <h3 style={{ textDecoration: 'underline' }}>
                  Te orientaré y daré recursos para afrontar los casos con
                  seguridad.
                </h3>
                <br />
                <li className="aboutmelist__list--item">
                  Consulta de caso puntual: 1 hora, 80€ (66,11+IVA)
                </li>
                <li className="aboutmelist__list--item">
                  Paquete de supervisión: Bono de 4 citas que puedes usar a lo
                  largo de 4 meses. 310€ (256,2+IVA; ahorro de 10 euros por pago
                  conjunto).
                </li>
                <li className="aboutmelist__list--item">
                  Grupo de Consultas de caso mensual de 2h en un grupo reducido
                  de 3 profesionales y yo, para favorecer la sensación de
                  seguridad y que de tiempo a que todas intervengan. 70 euros.
                </li>
              </ul>
              <br />
              <p>Métodos de pago: BIZUM y Transferencia</p>
              <a
                className="contactlink"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/1qrKosN-UOtHU95VxkEY9LebJmPo__adPJj9k74Ll2VU/edit"
              >
                Reserva tu cita aquí
              </a>
            </section>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
