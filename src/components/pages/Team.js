import React from 'react';
import { CollapsibleCard } from './CollapsibleCard';
import { Footer } from '../Footer';
import { Header } from '../Header';
import lorena from '../../images/lorena.png';
import candela from '../../images/candela.png';
import maria from '../../images/maria.png';
import anabelen from '../../images/anabelen.png';

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
            title="Lorena, psicóloga sanitaria"
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfZmuE7IV72BA9TCra9KC5IGuBis3vRGnjsQRqWGaiZTNPmfg/viewform"
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
                ADOS-2, en atención divergente (TDAH), tengo un máster de
                Atención Temprana y…¡muchas cositas más! Si quieres ver mi
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
                cualquier aspecto en que lo necesites. Realizo el test ADOS-2
                que se usa para evaluar Autismo. También realizo seguimientos,
                guiándote hacia tu autorregulación sensorial.
              </p>
              <p className="team__cards--text bold">
                Atiendo online o presencial en Madrid. Mi horario de atención es
                de Lunes a Viernes de 9:00 de la mañana a 2:30 de la tarde.
              </p>
              <p className="team__cards--text bold">
                La evaluación del perfil sensorial online tiene un valor de 135
                euros incluyendo el informe con la dieta sensorial.
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
            title="Ana Belén, psicóloga sanitaria"
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
        </div>
      </section>

      <Footer />
    </>
  );
}
