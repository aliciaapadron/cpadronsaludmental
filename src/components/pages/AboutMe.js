import { Footer } from '../Footer';
import { Header } from '../Header';
import eli from '../../images/eli.png';

export function AboutMe() {
  const data = {
    Neurodivergencias: [
      'Experta en Espectro Autista: Diagnóstico, Intervención e Inclusión Social',
      'Experta en (T)DAH: Dificultades del Aprendizaje y Dificultades de Conducta',
      'Identificación de Autismo en Población Adulta',
      'Identificación de (T)DAH en Población Adulta',
      'Alta Capacidad y Autismo: Doble Excepcionalidad',
      'Psiconutrición y Neurodivergencias',
      'Detección y Acompañamiento de Neurodivergencias en Población Adulta',
      'Procesamiento Sensorial en personas Neurodivergentes a lo largo de todo el ciclo vital',
      'Evaluación e Intervención Multidisciplinar en Adultos en el Espectro Autista',
      'Autismo y (T)DAH a lo largo del ciclo vital: Un enfoque desde la neurodiversidad',
      'Intervención en psicoterapia con adultos',
    ],
    General: [
      'Especialista en Terapias Contextuales y de Tercera Generación',
      'Mediadora en Educación Afectivo-Sexual',
      'Educadora Familiar',
      'Grado Universitario en Psicología (UNED) en curso',
    ],
    Trauma: [
      'Evaluación y reparación del Apego en Psicoterapia con Enfoque Integrador',
      'Tratamiento del Estrés Postraumático (TEPT)',
      'Experta en duelo',
      'Evaluación y Abordaje de la Ideación Suicida',
      'Experta en Prevención del ASI',
      'Intervención con Sistema de Familias Internas (IFS)',
      'Especialista en Apego y Trauma',
      'Neurodivergencias, trauma y disociación',
    ],
  };

  return (
    <>
      <Header />
      <section className="aboutsection">
        <h2 className="aboutsection__title">
          Conóceme <br />
        </h2>
        <img
          className="aboutsection__img"
          src={eli}
          alt="Imagen de Cris y Eli"
          title="Imagen de Cris y Eli"
        />{' '}
      </section>
      <section className="aboutmesection">
        <p className="aboutmesection__text">
          Soy Cris, mujer Autista, Hiperactiva y Altas Capacidades. Soy{' '}
          <span className="bold">
            Asesora en Neurodivergencias, Experta en Autismo, (T)DAH y AACC.
          </span>{' '}
          Soy{' '}
          <span className="bold">
            Especialista en Terapias Contextuales y de Tercera Generación,
            además de Educadora Afectivo-Sexual y Educadora Familiar.
          </span>
        </p>
        <br />
        <p className="aboutmesection__text">
          Soy{' '}
          <span className="bold">
            Experta en Duelo y estoy formada en Apego, Trauma (TEP, ASI...).
          </span>
        </p>
        <br />
        <p className="aboutmesection__text">
          Estoy formada en{' '}
          <span className="bold">
            Doble Excepcionalidad (2e) y Excepcionalidad múltiple, Trastorno
            Obsesivo Compulsivo (TOC), Trastornos de la Conducta Alimentaria
            (TCA) y otras co-ocurrencias para favorecer un abordaje profundo.
            Tengo un enfoque integrador y contextual.
          </span>{' '}
        </p>
        <br />
        <p className="aboutmesection__text">
          Acompaño a personas{' '}
          <span className="bold">Autistas, (T)TDAH y Altas Capacidades</span> a
          conocer su identidad detrás del masking, a respetar sus necesidades
          sensoriales, practicar la compasión consigo mismos/as/es y a
          relacionarse satisfactoriamente con sus seres queridos.
        </p>
        <br />
        <p className="aboutmesection__text">
          Mi objetivo es ofrecer un{' '}
          <span className="bold">
            servicio sin jerarquizar, de Neurodivergente a Neurodivergente.
          </span>{' '}
          En el que compartiré mis detecciones y llegaremos a conclusiones
          juntas/os/es, ya que tu eres la/el principal experta/o/e en tí
          misma/o/e.
        </p>
        <br />
        <p className="aboutmesection__text">
          Acompaño desde un{' '}
          <span className="bold">
            enfoque actualizado e informado en diversidades
          </span>
        </p>
        <br />
        <p className="aboutmesection__text">
          Informado y amable con las personas{' '}
          <span className="bold">
            no binarias, las no monogamias y enfoque de género.
          </span>{' '}
          Amable con la comunidad{' '}
          <span className="bold">
            LGTBIQA+, antigordófobo, aliada antirracista y respetuosa con las
            espiritualidades.
          </span>
        </p>
        <br />
        <p className="aboutmesection__text">
          Soy especialista en el acompañamiento y la detección de{' '}
          <span className="bold">mujeres cis/trans y personas AFAB</span>.
        </p>
        <br />
        <br />
        <p className="aboutmesection__text italic underline">Formación</p>
        <br />
        <div className="aboutmesection__text">
          {Object.keys(data).map((category) => (
            <div key={category} className="category">
              <h2>{category}</h2>
              <ul>
                {data[category].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <br />
        <p className="aboutmesection__text italic underline">¿Más personal?</p>
        <br />
        <p className="aboutmesection__text">
          Conseguir mi diagnóstico de Autismo y (T)DAH a los 26 años me hizo
          repasar el trauma que conlleva la falta de diagnóstico temprano. Lo
          que me impulsó a ofrecerle a otros/as/es el Soporte y el
          Acompañamiento que yo hubiera deseado.
        </p>
        <br />
        <p className="aboutmesection__text">
          A los 16 años comencé mi odisea por los Servicios de Salud Mental
          públicos: sobremedicalización, mala praxis, atención deficiente… No me
          fue mejor por lo privado. En total pasé por 2 psiquitras y 5 psicos,
          pero lo que rompió la Brecha de Acceso a mi diagnóstico fueron las
          Redes Sociales. Trasteando sobre la Alta Sensibilidad (High
          Sensitivity) llegué a la Hiper Sensibilidad Autista. Ahí me dejé
          llevar por Hiperfocos de información sobre otras mujeres y personas No
          Binarias (socializadas como mujeres) autistas, en cuyas
          características me vi reflejada. Lo que me llevó al diagnóstico
          oficial.
        </p>{' '}
        <br></br>
        <p className="aboutmesection__text">
          Encontrarme como Mujer Autista, (T)DAH y AACC le dio sentido a mis
          vivencias y me ayudó a comprenderme. Me ha impulsado a dejar el
          masking, ser compasiva conmigo misma y honrar mis necesidades. Así
          como a identificar los precipitantes de mis colapsos sensoriales
          (meltdowns/shutdowns), a entender mi maternidad y mis pensamientos. He
          tenido varios burnouts a lo largo de mi vida que se confundieron con
          depresión. Destacó el que tuve durante mi embarazo, en medio de la
          pandemia y en un curso muy complicado de la universidad. Todos mis
          desafíos sensoriales, cognitivos y emocionales se acentuaron un montón
          y empecé a descubrirme como Neurodivergente. Fue durante mi puerperio
          que me atreví a conseguir el Diagnóstico. Toda la incertidumbre y
          soledad que viví me animó a hacer de este camino un proceso más
          amable, informado y menos solitario para otras personas.
        </p>{' '}
        <br></br>
        <p className="aboutmesection__text">
          Desde peque, ha sido difícil para mí sentirme “parte de”, por lo que
          aprendí a relacionarme desde una “personalidad” que era mitad trauma y
          mitad masking. Debido a diversas vivencias, desarrollé Estrés
          Postraumático, Depresión, Ansiedad, TCA y TOC. Ahora en la adultez he
          encontrado mi lugar seguro gracias al activismo, y he podido
          relacionar mi trabajo con mi pasión y mi necesidad de responsabilidad
          social. Lo que me hace muy feliz.
        </p>{' '}
        <br></br>
        <p className="aboutmesection__text">
          Para mi es esencial promover y apoyar la economía y los
          emprendimientos de las personas neurodivergentes, por lo que mi equipo
          está formado íntegramente por Mujeres Neurodivergentes.
        </p>
        <br></br>
        <div className="aboutmesection__text">
          <a
            className="contactlink writeme__link writeme__team"
            href="/team"
            title="Ver equipo"
            target="_blank"
            rel="noreferrer"
          >
            Conoce al equipo.
          </a>
        </div>
        <div className="writeme">
          <a
            className="contactlink writeme__link"
            href="https://forms.gle/XczPAoxwFhU7NZBU9"
            title="Rellena el formulario"
            target="_blank"
            rel="noreferrer"
          >
            Rellena el formulario y empieza tu proceso.
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
