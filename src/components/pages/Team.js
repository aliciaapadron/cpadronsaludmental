import React from 'react';
import { CollapsibleCard } from './CollapsibleCard';
import { Footer } from '../Footer';
import { Header } from '../Header';
import lorena from '../../images/lorena.png';
import candela from '../../images/candela.png';
import maria from '../../images/maria.png';
import anabelen from '../../images/anabelen.png';
import maru from '../../images/maru.png';
import tania from '../../images/tania.png';
import andrea from '../../images/andrea.png';
import raquel from '../../images/raquel.png';

export function Team() {
  return (
    <>
      <Header />
      <section className="team">
        <h2 className="team__title">
          Conoce nuestro equipo <br />
        </h2>
      </section>
      <section>
        <div className="team__cards">
          <CollapsibleCard
            title="Lorena, psicóloga sanitaria. Certificada en ADOS-2"
            alt="Lorena"
            src={lorena}
          >
            <div>
              <p className="team__cards--text">
                Mi nombre es Lorena. Soy andaluza (en concreto de Jaén la ciudad
                del aceitico de oliva y los castillos) GORDA, feminista, queer,
                vegana, bisexual, no monógama, autista y atencionalmente
                divergente. Principalmente mi foco de interés es la Psicología y
                la Justicia social, entre otros.
              </p>
              <p className="team__cards--text">
                En mi recorrido como psicóloga sanitaria y psicoterapeuta
                integradora me he ido formando en neurodivergencias y en trauma,
                por lo que ofrezco un enfoque informado en trauma, el paradigma
                de la neurodiversidad, perspectiva de género, afirmativo en
                LGTBIAQ+ y disidencias sexoafectivas y relacionales, con
                perspectiva antigordofóbica y amable con diversas culturas y
                creencias.
              </p>
              <p className="team__cards--text">
                Durante mi experiencia laboral he acompañado a personas
                autistas, atencionalmente divergentes y altas capacidades a
                descubrir sus rasgos neurodivergentes, a gestionar los desafíos
                debido a las barreras sociales, a incorporar recursos de
                autorregulación y corregulación, reconocer violencias, recuperar
                derechos negados, expresar límites, fortalecer los vínculos
                emocionales y a compartir responsabilidades.
              </p>
              <p className="team__cards--text">
                En lo personal me considero una persona introvertida, por lo que
                necesito pasar tiempo a solas con mis intereses, pero también
                tengo una parte sociable que disfruta socializando a través de
                ellos y recibiendo información interesante por parte de otras
                personas. Sí, amo el infodumping y me siento súper afortunada de
                poder recibirlo.
              </p>
              <p className="team__cards--text">
                Desde la infancia, ha sido difícil para mí tener la sensación de
                pertenencia con otros grupos sociales, por los que creé una
                máscara social desde la cual relacionarme. Además a lo largo de
                mi vida he desarrollado trastorno de estrés postraumático,
                ansiedad y depresión, entre otros. Es desde mi propia
                vulnerabilidad que puedo conectar contigo y acercarme a tu
                vulnerabilidad y construir puentes hasta llegar a ti aunque tú
                eres la persona experta en tu vida y yo solo soy una escaladora
                que te acompaña en tu escalada.
              </p>
              <p className="team__cards--text bold">
                Atiendo online y mi horario de atención es de Martes a Viernes
                de 9:00 de la mañana a 2:30 de la tarde.
              </p>
              <p className="team__cards--text bold">
                El valor de la cita de 1h es de 60 euros.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/unapsicoxulisima/"
                >
                  Mi IG es @unapsicoxulisima
                </a>
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeU1hcgIN4uO_pAayp9iWLJJJTjCQMJRZ7fOGctfcUUlTKlpA/viewform?vc=0&c=0&w=1&flr=0"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="María, terapeuta ocupacional"
            alt="María"
            src={maria}
          >
            <div>
              <p className="team__cards--text">
                Mi nombre es María y soy terapeuta ocupacional especializada en
                Integración Sensorial y Neurodivergencias.
              </p>
              <p className="team__cards--text">
                Soy Autista, con Atención Divergente (TDAH) y Altas Capacidades,
                por lo que, el ser neurodivergente, me hace poder acompañar
                desde lo profesional y lo personal y empatizar de una manera
                diferente.
              </p>
              <p className="team__cards--text">
                Además, de esto, soy activista por los derechos de los animales
                humanos y no humanos, por lo que estoy en contra de cualquier
                opresión. Por ello, soy antiespecista, anticapacitista, aliada
                antirracista, bisexual, feminista transincluyente…
              </p>
              <p className="team__cards--text">
                Tengo formación y experiencia en acompañar personas de todas las
                etapas de la vida (infancia, adolescencia, adultez y tercera
                edad). También estoy formada en Problemas de Alimentación,
                problemas de sueño, lactancia materna, estoy certificada en
                ADOS-2 y ADI-R, en atención divergente (TDAH), tengo un máster
                de Atención Temprana y…¡muchas cositas más! Si quieres ver mi
                formación o experiencia, puedes consultar mi linkedn o mi
                doctoralia y por si queréis conocerlo, mi número de colegiada es
                CAM 0194 y mi certificado de Integración Sensorial por la
                Universidad del Sur de California es 1652.
              </p>
              <p className="team__cards--text">
                Me gradué en 2015, y desde entonces no dejo de formarme y
                actualizarme para poder ofrecer el mejor servicio a mis
                acompañades, ya que amo mi profesión, siendo ésta uno de mis
                intereses especiales. En febrero de 2023 comencé mi proyecto
                BalanCÉAte (@xbalanceatex) y ahora he tenido la suerte de
                empezar a colaborar en este otro proyecto con grandes psicólogas
                que vibran en la misma sintonía que yo.
              </p>
              <p className="team__cards--text">
                Entre mis servicios, ofrezco evaluación de Perfil Sensorial en
                cualquier etapa de la vida (desde el nacimiento hasta la vejez),
                en él incluyo un informe con su respectiva dieta sensorial,
                adaptaciones laborales, académicas, en la vida diaria o en
                cualquier aspecto en que lo necesites. Realizo el test ADOS-2 y
                ADI-R que se usa para evaluar Autismo. Realizo los test de
                Barthel y Katzs para evaluar situación de discapacidad, útiles
                para el proceso de solicitar discapacidad. También realizo
                seguimientos, guiándote hacia tu autorregulación sensorial.
              </p>
              <p className="team__cards--text bold">
                Atiendo online o presencial en Madrid. Mi horario de atención es
                de Lunes a Viernes de 9:00 de la mañana a 2:30 de la tarde.
              </p>
              <p className="team__cards--text bold">
                La evaluación del perfil sensorial online tiene un valor de 185
                euros incluyendo el informe con la dieta sensorial. Consulta en
                mi formulario mi oferta de servicios.
              </p>

              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeOeLGYFB6pnqK68LQWS4yG-LJKYXF2m497s_CzEdiE3CV18w/viewform?vc=0&c=0&w=1&flr=0"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="Candela, psicóloga sanitaria"
            alt="Candela"
            src={candela}
          >
            <div>
              <p className="team__cards--text">
                Hola, mi nombre es Candela y trabajo como psicóloga
                especializada en género, neurodivergencias y trauma.
              </p>
              <p className="team__cards--text">
                Cuando me preguntan cómo he llegado hasta aquí, mi respuesta
                corta podría ser: por la necesidad e imposición de trabajar en
                este sistema capitalista. Sin embargo, la respuesta más
                desarrollada, también, tiene en cuenta lo mucho que me ha
                interesado siempre el funcionamiento de todo. Y con todo me
                refiero al amplio abanico que va de lo más microscópico y
                concreto (por ejemplo, los procesos celulares, etológicos o
                psicológicos) hasta los procesos más generales o sistémicos
                (como procesos naturales o sistemas políticos-sociales).
              </p>
              <p className="team__cards--text">
                Esta continua curiosidad viene acompañada de lo apelada que me
                siento a contribuir socialmente, la necesidad de conectar con
                personas semejantes y el proyecto de construir un micelio de
                cuidados que nos nutra y sostenga.
              </p>
              <p className="team__cards--text">
                Al ser una persona extremadamente sensible, socializada como
                mujer, neurodivergente, gorda y queer, me han atravesado
                numerosas opresiones. Esto, junto a la violencia recibida y
                percibida, ha afectado enormemente a mi salud mental y física en
                numerosos momentos de mi vida.
              </p>
              <p className="team__cards--text">
                Todo ello ha sido el mayor motor para querer aportar a la
                sociedad mi granito de amor, ternura y sostén; sobre todo, a
                personas que pasen por situaciones de opresión, violencia y
                abuso.
              </p>
              <p className="team__cards--text">
                Al convertir uno de mis intereses profundos en mi profesión,
                disfruto de ella enormemente. Me apasiona estar en continuo
                aprendizaje e ir escalando a cuestiones más complejas. Es por
                ello, que estoy especializada en género, neurodivergencias,
                apego, trauma, disociación, estrés postraumático, psicología
                perinatal, entre otras. Y pretendo continuar especializándome y
                formándome en los campos que considero más interesantes y
                necesarios.
              </p>
              <p className="team__cards--text">
                Sobre mi forma de trabajar, uno todas las corrientes que por
                ahora domino: EMDR, Terapias de Tercera Generación y Cognitivo
                Conductual, para poder proporcionar un trabajo individualizado e
                integral, dónde trabajar desde un enfoque integrativo,
                afirmativo en LGTBIQ+ y disidente.
              </p>
              <p className="team__cards--text">
                De la mano de estas especializaciones va también un sólido
                posicionamiento político, por lo que, en mi acompañamiento,
                siempre proporcionaré un espacio libre de machismo, transfobia,
                racismo, capacitismo, cuerdismo, gordofobia, especismo,
                punitivismo, fascismo y como no, en contra del capital y sus
                mandatos. Todo esto, sumado a una perspectiva queer, hace que la
                sensibilidad por la diversidad afectiva, sexual y relacional
                también esté presente en mi acompañamiento.
              </p>
              <p className="team__cards--text">
                <ul className="team__listdata">
                  <p className="bold">
                    Al llegar a este punto te preguntarás, ¿qué puedo ofrecerte?
                  </p>
                  <li className="team__listdata--item">
                    Un lugar donde puedas aprender a escucharte, mimarte y
                    cuidarte.{' '}
                  </li>
                  <li className="team__listdata--item">
                    Un refugio donde poder sanar tus heridas desde la ternura,
                    la escucha y la compresión.
                  </li>
                  <li className="team__listdata--item">
                    Un espacio seguro donde puedas aprender a crear y ser el
                    tuyo propio.
                  </li>
                </ul>
              </p>
              <p className="team__cards--text bold">
                Atiendo online y mi horario de atención es de Martes a Viernes
                de 9:00 de la mañana a 2:00 de la tarde.
              </p>
              <p className="team__cards--text bold">
                El valor de una cita de 1h es de 70 euros.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeNW0CPjMbIbkpmXFvs7OBhZOJV5QNp5lekw_cg3ezbMztLew/viewform?vc=0&c=0&w=1&flr=0"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="Ana Belén, psicóloga sanitaria. Certificada en ADOS-2 y ADI-R"
            alt="Ana Belén"
            src={anabelen}
          >
            <div>
              <p className="team__cards--text">
                Holi queride, mi nombre es Ana Belén, nací en el Mediterráneo
                (no es una canción de Serrat), adoro el mar, y aunque me cueste
                mucho describirme ya que considero que somos seres complejos, te
                daré unas pinceladas para que puedas conocerme: soy madre
                neurodivergente de tres criaturas de alta demanda, feminista,
                vegetariana, sapiodemisexual y panromántica, y podría seguir…
              </p>
              <br></br>
              <p className="team__cards--text">
                Desde mi infancia he sentido esa sensación de “no encajar”,
                demasiado sensible e introvertida. En la edad adulta después de
                varias crisis existenciales, fui identificada por una psicóloga
                especializada como <span className="bold">PAS y AACC</span>, en
                este sentido para mí fue liberador reapropiarme de mi identidad,
                que tantas veces había sido sometida a violencia por este
                sistema opresor y hostil con las neurodivergencias, a lo largo
                de mi vida, especialmente en la juventud he sufrido de
                depresión, ansiedad, trastornos de la alimentación y estrés
                postraumático complejo, actualmente estoy en cuestionamiento de
                atención neurodivergente.{' '}
              </p>
              <br></br>
              <p className="team__cards--text">
                Mis intereses profundos son variados como mi multipotencialidad:
                la psicología, el activismo social, el ecologismo, la danza …
                son algunos de ellos.
              </p>
              <br></br>
              <p className="team__cards--text">
                El aprendizaje continuo es mi pasión, me he formado en
                <span className="bold">
                  psicoterapia integradora, trauma, apego, EMDR, migraciones,
                  danzamovimientoterapia y neurodivergencias
                </span>
                , además, continúo nutriéndome constantemente con cada
                acompañade, con vosotres crezco como persona y psicóloga,
                tratando de transformar nuestra pequeña parcela en un lugar
                radicalmente tierno.
              </p>
              <br></br>
              <p className="team__cards--text">
                Mi{' '}
                <span className="bold">
                  enfoque terapéutico es transfeminista, neuroafirmativo,
                  LGTBIQA+ friendly, antiracista, antifascista, antigordofóbico,
                  anticapacitista, intercultural y amable con las disidencias
                  sexoafectivas.
                </span>
              </p>
              <br></br>
              <p className="team__cards--text">
                En mi experiencia profesional he acompañado durante 10 años a
                personas pertenecientes a colectivos y minorías excluidas,
                principalmente mujeres migrantes o socializadas como tal,
                familias transculturales y otras personas que han sido
                violentadas por el sistema cisheteropatriarcal.
              </p>
              <br></br>
              <p className="team__cards--text">
                Desde mi vulnerabilidad y humanismo, me encantaría ofrecerte un
                viaje de autodescubrimiento en un{' '}
                <span className="bold">espacio seguro</span> en el que poder ser
                tú misme, en <span className="bold">catalán e italiano</span> si
                te sientes más cómode (he hecho terapia en inglés y francés
                también, aunque no los domine).
              </p>
              <br></br>
              <p className="team__cards--text bold">
                Mi horario de atención on-line es de lunes a viernes de 10:00 de
                la mañana a 14:00h y tardes a consultar de 16:00 a 19:00h
              </p>
              <p className="team__cards--text bold">
                El valor de una cita de 1h es de 70 euros.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd2ENVzRP1LrouJ0c2JHzVmOn3OpEIxHafiNLZxyCWgB8JImA/viewform"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="Maru, médica" alt="Maru" src={maru}>
            <div>
              <p className="team__cards--text">
                Mi nombre es <strong>Maru</strong>, de María Eugenia. Soy{' '}
                <strong>migrante venezolana, neurodivergente y Médica</strong>,
                es decir, me dedico al diagnóstico y tratamiento de todo tipo de
                condiciones propias del adulto y en especial de la mujer, con ya
                casi 15 años de experiencia. <strong>Eso en el papel</strong>.
              </p>
              <br></br>
              <p className="team__cards--text">
                En la vida real soy una mujer que ha acudido al sistema de salud
                público, privado, venezolano, español, en muchas ocasiones y ha
                sufrido las{' '}
                <strong>
                  múltiples violencias que la medicina occidental (blanca, cis,
                  patriarcal y capitalista) tiene reservadas para quienes no
                  somos ni nos enfermamos como se espera de nosotras.
                </strong>{' '}
              </p>
              <br></br>
              <p className="team__cards--text">
                Esto ha fortalecido mi empatía: sé lo que es que ignoren tus
                síntomas, que atribuyan todos tus problemas a tu peso, que te
                discriminen, que no te crean, que no admitan sus errores
                diagnósticos, que no te escuchen y sobre todo que te invaliden.
                Sé lo que es tener que recurrir al masking para sobrellevar los
                días y a las Altas Capacidades para investigar por tu cuenta,
                sintiéndote sola e insegura.
              </p>
              <br></br>
              <p className="team__cards--text">
                Sé lo que es seguir adelante a pesar del{' '}
                <strong>
                  trauma complejo, la migración, la neurodivergencia, la
                  gordofobia y la depresión/ansiedad, por lo que mi práctica es
                  informada en estos temas.
                </strong>
              </p>
              <br></br>
              <p className="team__cards--text">
                Por eso ofrezco un servicio de Medicina Integral:{' '}
                <strong>
                  no hay nada más importante que lo que tú sientes
                </strong>
                . Eres el centro de la atención que me gustaría brindarte,
                comprendiendo sobre todo{' '}
                <strong>
                  las violencias sistémicas que te atraviesan, tus necesidades
                  sensoriales y especialmente la gran verdad de que no hay salud
                  sin salud mental.
                </strong>
              </p>
              <br></br>
              <p
                className="team__cards--text"
                style={{ textDecoration: 'underline', fontWeight: 'bolder' }}
              >
                Trabajo especialmente sobre:
              </p>
              <br></br>
              <ul className="team__cards--text">
                <li className="diagnostic__listdata--item">
                  Condiciones propias o frecuentes de la mujer (y todos sus
                  mitos): alteraciones menstruales/menopausia/anticoncepción,
                  Ovario poliquístico, Fibromialgia, trastornos de la inmunidad,
                  SIBO y alteraciones del Microbioma, Disautonomía.
                </li>
                <li className="diagnostic__listdata--item">
                  Diagnóstico de Síndrome de Ehler Danlos, Marfan y otras{' '}
                  <strong>hiperlaxitudes</strong>.
                </li>
                <li className="diagnostic__listdata--item">
                  Especialista en Infecciones de Transmisión Sexual con enfoque{' '}
                  <strong>LGTBIQ+ </strong>, comunidad de la que me considero
                  aliada.
                </li>
                <li className="diagnostic__listdata--item">
                  {' '}
                  Diagnóstico y seguimiento de patologías comunes como
                  Hipertensión, Hipotiroidismo, Diabetes, infecciones en
                  general,{' '}
                  <strong>
                    priorizando las necesidades sensoriales propias de la
                    Neurodivergencia
                  </strong>
                  .
                </li>
                <li className="diagnostic__listdata--item">
                  Orientación para acudir a citas oficiales en el sistema formal
                  de salud, incluyendo <strong>informes o mediación</strong>{' '}
                  según el caso.
                </li>
                <li className="diagnostic__listdata--item">
                  Acompañamiento y formación para <strong>cuidadores</strong>,
                  en especial orientación para quienes lidian con pacientes con{' '}
                  <strong>Demencias</strong>.
                </li>
                <li className="diagnostic__listdata--item">
                  Lo que puedas necesitar lo podemos conversar y en caso de ser
                  necesario, cuento con colegas <strong>especialistas</strong>{' '}
                  en otras áreas si necesitáramos un apoyo extra.
                </li>
                <li className="diagnostic__listdata--item">
                  Salud en todas las tallas, atención a la Neurodiversidad,
                  Cuidados Paliativos y la Mediación Artística forman parte de
                  mis muchos <strong>intereses profundos</strong>.
                </li>
              </ul>
              <br></br>
              <p className="team__cards--text bold">
                Atiendo online las tardes de lunes, jueves y viernes de 16:00 a
                21:00h, con posibilidad de flexibilizar según tus necesidades.
                También trabajo en <strong>inglés</strong>.
              </p>
              <p className="team__cards--text bold">
                La consulta de una hora tiene un valor de 90 euros. Consulta en
                mi formulario mi oferta de servicios.{' '}
              </p>
              <p className="team__cards--text bold">
                Medicina en un espacio seguro, ¡te espero!
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd2LZ8tWOpRF147UV7n3lJ4WeAW5rxcNKJlpWDogOyX9OX24Q/viewform?vc=0&c=0&w=1&flr=0&fbclid=PAZXh0bgNhZW0CMTEAAabJTs_HUvuMM6RkWhHRIzTto9vif-3goabDK1Mv6qJXcr60vAPu5i_pWdk_aem_xSazZgBdAcGu5Gou1aNVbg"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="Tania, psicóloga sanitaria. Certificada en ADOS-2"
            alt="Tania"
            src={tania}
          >
            <div>
              <p className="team__cards--text">
                Hola bonites, mi nombre es Tania <strong>(ella) </strong>soy
                psicóloga sanitaria ejerciendo desde hace más de 7 años, mamá de
                una bebé de alta demanda, diabética y neurodivergente.
              </p>
              <br></br>
              <p className="team__cards--text">
                Me gusta describir mi trabajo como centrado en la psicología
                neuroafirmativa y queer, con las especializaciones de
                acompañamiento{' '}
                <strong>
                  individual, sobre todo a adolescentes y jóvenes adultes, de
                  parejas/vínculos y familiar.
                </strong>{' '}
                Y de todas las circunstancias que atraviesan nuestra salud
                mental especialmente a las personas neurodivergentes y/o del
                colectivo como los estados de ánimo, las crisis, los traumas,
                los apegos y vínculos, la gestión y comunicación de nuestras
                necesidades y la de los demás, las necesidades académicas para
                romper con los techos de cristal del sistema educativo actual,
                etc. En mi recorrido formativo encontramos un máster en
                dificultades de los aprendizajes y el lenguage, la terápia
                asistida con animales (con mi perri-hija Banana), el{' '}
                <strong>EMDR </strong> para el abordaje del trauma, la{' '}
                <strong>terapia sexual y de pareja</strong> con perspectiva
                feminista y LGTBIAQ+, y el abordage del{' '}
                <strong>chemsex </strong> entre muchas lecturas y
                seminarios-cursos varios.
              </p>
              <br></br>
              <p className="team__cards--text">
                Como persona con <strong>atención divergente y AACC</strong>, he
                sido la niña lista que sin aparente esfuerzo, sin parar de
                hablar, sin parecer prestar atención, lo hacía. La intensa, la
                dispersa, la que necesita estar en constante crecimiento y
                alimentando su curiosidad. Siempre he necesitado concentrarme
                con una <strong>distracción controlada</strong>… recuerdo estar
                en clase leyendo un libro escondido en el pupitre para poder
                prestar atención a la maestra o maestro, o necesitar estar
                dibujando en las últimas páginas de la agenda, de los libros, de
                las libretas… estudiar y hacer trabajos escuchando a rammstein o
                apocalyptica a todo volumen.
              </p>
              <br></br>
              <p className="team__cards--text">
                Como <strong>curiosidades</strong> sé tocar algunos instrumentos
                (no convencionales: handpan y gralla), me interesa todo lo que
                puedas hacer con las manos (las mías están en constante
                movimiento) como tejer, coser, tatuar, hacer macramé, anillos,
                la resina epóxica, y tengo una máquina láser con la que hago
                objetos personalizados de madera y/o cristal.
              </p>
              <br></br>
              <p className="team__cards--text">
                Soy la psico de la memoria de elefante, la de los detalles, los
                tatuajes y el pelo raro (rapado y/o colorinchis), la
                antisistema, la directa, la franca, y la flipada.
              </p>
              <br></br>
              <p className="team__cards--text">
                En mi espacio de terapia <strong>no se toleran</strong>{' '}
                actitudes lgtbifóbicas, gordofóbicas, racistas, machistas ni
                capacitistas.
              </p>
              <p className="team__cards--text">
                Te puedo atender en <strong>castellano, catalán</strong> y, pese
                a no sentirme especialmente segura, <strong>inglés</strong>, de
                lunes a jueves por las tardes: de 14.30 a 20h.
              </p>
              <p className="team__cards--text bold">
                El valor de la sesión individual es de 60euros la hora, y de
                pareja/vínculo o familiar 80euros la hora.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/taniasaez.psicologia/?hl=es"
                >
                  Mi instagram es @taniasaez.psicologia
                </a>
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://forms.gle/SCUANNgmCm5HqcQ79"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="Andrea, nutricionista"
            alt="Andrea"
            src={andrea}
          >
            <div>
              <p className="team__cards--text">
                Acompaño{' '}
                <strong>
                  procesos de recuperación de TCA (AN, BN, TPA, TERI…) o
                  conducta alimentaria desregulada sin un diagnóstico.
                </strong>
                Además, puedo acompañarte a trabajar en tus hábitos de vida,
                integrando el autocuidado en tu día a día.
              </p>
              <br></br>
              <p className="team__cards--text">
                Cada proceso es 100% personalizado pero todos tienen en común:
                realizamos <strong>educación alimentaria</strong> para entender
                qué necesita el cuerpo realmente, las sesiones son un{' '}
                <strong>espacio seguro </strong>donde se da espacio a las
                emociones y las dificultades que conlleva el proceso, todo lo
                propuesto es{' '}
                <strong>desde una mirada amable y el respeto al cuerpo </strong>{' '}
                (esto, puede que no esté al inicio del proceso, pero lo iremos
                construyendo juntas poco a poco).
              </p>
              <br></br>
              <p className="team__cards--text">
                Trabajo desde un enfoque{' '}
                <strong>
                  de salud integrativa, para todas las tallas, alejada de
                  restricciones y prohibiciones{' '}
                </strong>
                y el objetivo final es que tengas{' '}
                <strong>
                  flexibilidad alimentaria y autonomía para cuidarte.
                </strong>
              </p>
              <br></br>
              <p className="team__cards--text">
                <strong>
                  Desde que acabé la carrera he acompañado a personas con
                  dificultades en la relación con la comida y su cuerpo.
                </strong>{' '}
                Mi práctica está informada en trauma y las bases son la
                compasión, el auto-liderazgo y el fomento del amor propio.
              </p>
              <br></br>
              <p className="team__cards--text">
                <strong>No realizo dietas</strong>, pero sí puedo acompañarte a
                salir de ellas con amabilidad si estás ahí y sientes que no te
                ayudan.
              </p>
              <br></br>
              <p className="team__cards--text">
                Estoy formada en{' '}
                <strong>
                  Trastornos de la Conducta Alimentaria, Alimentación informada
                  en trauma, Neurodivergencias y su influencia en la conducta
                  alimentaria
                </strong>{' '}
                alimentaria y estoy certificada como Coach Nutricional nivel I.
                Mi{' '}
                <strong>
                  experiencia profesional trabajando a nivel ambulatorio y en un
                  hospital de día / comedor terapéutico{' '}
                </strong>
                terapéutico también ha sido clave en la profesional que soy hoy.
              </p>
              <p className="team__cards--text">
                <strong>En lo personal </strong>soy una persona muy sensible, en
                la adolescencia me identifiqué con la etiqueta de Persona
                Altamente Sensible y ahora, con más información y recursos, me
                encajan cosas del déficit de atención y el autismo en las que
                aún estoy encontrándome. Si vamos más a lo práctico, soy una
                persona que necesita empezar el día lento y con un café tamaño
                XL. Si me ves por la calle, es probable que esté haciendo fotos
                al cielo o a cualquier árbol: la fotografía me hace conectar con
                la presencia y la belleza cotidiana. No puedo hablar de mí sin
                hablar de la <strong>naturaleza </strong>porque es mi mayor
                fuente de inspiración y regulación; sentir su sostén es algo que
                me aporta mucha paz.{' '}
                <strong>
                  Creo en un Yo-Nosotros, en el poder de la comunidad y los
                  vínculos para reparar nuestras heridas estructurales. Así que
                  tu contexto me importa MUCHO y pongo mucho de mi parte para
                  ofrecerte un espacio seguro con perspectiva de género,
                  afirmato en LGTBIAQ+ y antigordofobia.{' '}
                </strong>{' '}
                Siento que mi trabajo es una forma bonita de luchar contra el
                sistema y reivindicar que está bien ser quien eres: ojalá puedas
                sentir eso.
              </p>
              <p className="team__cards--text bold">
                Hago sesiones online de aprox. 1h, cuyo coste es 60€.
              </p>
              <p className="team__cards--text bold">
                Dependiendo del día, tengo huecos de mañana (11:00-14:30) y de
                tarde (16:00-19:30). Puedes escribirme por el formulario y
                seguro que encontramos un hueco que nos encaje a ambas.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeADps2IudwqgO5W4yRf0oZLoo-CEUW9vITCS4_d7cEV5E0lA/viewform"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard
            title="Raquel, psicóloga general sanitaria"
            alt="Raquel"
            src={raquel}
          >
            <div>
              <p className="team__cards--text">
                Soy Raquel (ella) y, soy{' '}
                <strong>
                  psicóloga general sanitaria especializada en Neuropsicología.{' '}
                </strong>
                Trabajo con <strong>adolescentes y adultes </strong> online.
                Nací en Valladolid y he vivido 8 largos años en Salamanca, donde
                tuve el placer de formarme académicamente y descubrirme
                personalmente, encontrando mi identidad y mi orientación
                sexuales.
              </p>
              <br></br>
              <p className="team__cards--text">
                En lo profesional, una de{' '}
                <strong>
                  {' '}
                  mis grandes pasiones desde siempre ha sido la alimentación y
                  los TCA
                </strong>{' '}
                (los trastornos de la conducta alimentaria), así como{' '}
                <strong>
                  la relación existente con la imagen corporal - en particular -
                  y la autoestima - en general-.{' '}
                </strong>{' '}
                Es por ello por lo que me he formado (y sigo haciéndolo) en este
                campo. Al final la comida es algo presente en nuestro día a día
                y nos afecta. Me gusta enfocar la terapia desde un{' '}
                <strong>punto no pesocentrista ni biologista.</strong>
              </p>
              <br></br>
              <p className="team__cards--text">
                También soy <strong>neuropsicóloga, </strong>por lo que puedo
                ayudarte y acompañarte en el proceso de{' '}
                <strong>solicitud de discapacidad o bajas laborales, </strong>{' '}
                realizando evaluación, informe…
              </p>
              <br></br>

              <p className="team__cards--text">
                Respecto a lo personal, soy una chica curiosa, siempre con
                preguntas en mi cabeza y un libro entre mis manos. Me gusta
                escuchar a las personas, generar espacios en los que se sientan
                validadas. Soy amante de la música, de la historia, del arte (en
                todas sus expresiones) y de viajar. Me gusta sumergirme en
                nuevas experiencias y conocer personas que me hagan reflexionar
                y replantearme las cosas. Pero también adoro quedarme en casa, a
                mi bola y pasar tiempo conmigo misma.
              </p>
              <br></br>
              <p className="team__cards--text">
                Trabajo desde una{' '}
                <strong>
                  perspectiva feminista y LGBT+ friendly, segura y cálida, con
                  perspectiva de género.
                </strong>
              </p>
              <p className="team__cards--text bold">
                Estaré encantada de atender de manera online de Lunes a Viernes
                de 10:00h a 14:00h, o cuando podamos encontrar un hueco,
                pregunta por mi disponibilidad, seguro podemos encontrar un
                momento en común.
              </p>
              <p className="team__cards--text bold">
                Mis sesiones individuales tienen una duración de una 1h y un
                valor de 50 euros.
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/tu.psique.sabe/?hl=en/"
                >
                  Puedes encontrarme y conocerme un poquito más en IG:
                  @tu.psique.sabe
                </a>
              </p>
              <p className="team__cards--text">
                <a
                  className="contactlink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbXNj4xlBa_SUL-8gpPbol3Z45tXkaUe_8s2FJaBFzhzsSJg/viewform"
                >
                  Mi formulario
                </a>
              </p>
            </div>
          </CollapsibleCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
