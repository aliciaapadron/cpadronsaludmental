import React from 'react';
import { CollapsibleCard } from './CollapsibleCard';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Diagnostic() {
  return (
    <>
      <Header />
      <section className="diagnostic">
        <p className="diagnostic__text">
          <span className="bold">
            Diagnóstico diferencial y multidisciplinar{' '}
          </span>
          realizado por profesionales neurodivergentes. Realizamos el proceso{' '}
          <span className="bold">online</span> y está destinado a personas{' '}
          <span className="bold">mayores de 18 años </span> con fluidez verbal.
        </p>
        <br></br>
        <p className="diagnostic__text">
          Tenemos una
          <span className="bold"> perspectiva actualizada</span> y formada en
          diversidades. Somos especialistas en detectar neurodivergencias en
          perfiles con tendencia a enmascarar las características{' '}
          <span className="bold">
            neurodivergentes, como mujeres y personas socializadas en femenino
            (AFAB), personas racializadas, trans{' '}
          </span>
          y que han sufrido violencia sistemática.
        </p>
        <br></br>
        <br></br>
        <p className="diagnostic__text">
          En el informe final de evaluación tras el diagnóstico encontrarás
          recogido todo el proceso, las pruebas y sus resultados, así como las
          orientaciones pertinentes para mejorar tu bienestar. Te servirá para
          iniciar el{' '}
          <span className="bold">
            trámite de la Discapacidad, para solicitar adaptaciones en tu
            trabajo y estudios.
          </span>
          <br />
          <br />
          Solicita cita rellenando{' '}
          <a
            className="contactlink writeme__link"
            href="https://forms.gle/kK1BxAAQe6xzoA8BA"
            title="Link al formulario"
            target="_blank"
            rel="noopener noreferrer"
          >
            este formulario.
          </a>
          <br />
          <br />
          Puedes comunicarnos tus dudas aquí{' '}
          <a
            className="contactlink writeme__link"
            href="mailto: diagnosticos.cpadron@gmail.com"
            title="Rellena el formulario"
            target="_blank"
            rel="noopener noreferrer"
          >
            diagnosticos.cpadron@gmail.com
          </a>
          .
        </p>
      </section>
      <section className="diagnostic">
        <p className="diagnostic__title">DIAGNÓSTICO AUTISMO:</p>
        <div className="diagnostic__cards">
          <CollapsibleCard title="A) Cita personalidad + Línea de vida">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Evaluación con test PID-5 bf versión corta y línea de vida. Con
                antelación te enviamos un audio/texto con las indicaciones para
                realizar la línea de vida y nos la envías antes de la cita.
                Durante la cita te aplicaremos la prueba PID-5 y evaluaremos la
                línea de vida.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="B) Cita autismo evaluación ados-2">
            <div className="diagnostic__cards--text">
              <p> Evaluación con prueba ADOS-2.</p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">
                    Psicólogas y terapeuta ocupacional.
                  </span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="C) Entrevista familiar/vincular">
            <div className="diagnostic__cards--text">
              <p> Entrevista a familiar/amistad/pareja.</p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">
                    Psicólogas y terapeuta ocupacional.
                  </span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">50€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="D) Cita autismo juicio clínico (nos basamos en el dsm5/cie11, perspectiva  neuro divergencias) + test cribado (cat-q, raads,aspie quiz).">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Con antelación te enviamos los test autoaplicables, los realizas
                y nos los envías antes de la cita. Durante la cita analizamos
                tus respuestas, realizamos juicio clínico, analizamos tus rasgos
                respecto al manual diagnóstico y el paradigma de las
                neurodivergencias.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
        </div>
      </section>
      <section className="diagnostic">
        <p className="diagnostic__title">DIAGNÓSTICO TDAH:</p>
        <div className="diagnostic__cards">
          <CollapsibleCard title="A) Cita personalidad + Línea de vida">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Evaluación con test PID-5 bf versión corta y línea de vida. Con
                antelación te enviamos un audio/texto con las indicaciones para
                realizar la línea de vida y nos la envías antes de la cita.
                Durante la cita te aplicaremos la prueba PID-5 y evaluaremos la
                línea de vida.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="B) Cita tdah diva 1h30mins 200€ psicóloga">
            <div className="diagnostic__cards--text">
              <p> Evaluación con prueba ADOS-2.</p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicóloga.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="C) Entrevista familiar/vincular">
            <div className="diagnostic__cards--text">
              <p> Entrevista a familiar/amistad/pareja.</p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">
                    Psicólogas y terapeuta ocupacional.
                  </span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">50€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="D) Cita tdah juicio clínico (dsm5/cie11, perspectiva neurodivergencias) + test cribado (ars-5, wender utah).">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Con antelación te enviamos los test autoaplicables, los realizas
                y nos los envías antes de la cita. Durante la cita analizamos
                tus respuestas, realizamos juicio clínico, analizamos tus rasgos
                respecto al manual diagnóstico y el paradigma de las
                neurodivergencias.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
        </div>
      </section>
      <section className="diagnostic">
        <p className="diagnostic__title">
          DIAGNÓSTICO DIFERENCIAL AUTISMO Y TDAH:
        </p>
        <div className="diagnostic__cards">
          <CollapsibleCard title="A) Cita personalidad + Línea de vida">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Evaluación con test PID-5 bf versión corta y línea de vida. Con
                antelación te enviamos un audio/texto con las indicaciones para
                realizar la línea de vida y nos la envías antes de la cita.
                Durante la cita te aplicaremos la prueba PID-5 y evaluaremos la
                línea de vida.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="B) Cita autismo evaluación ados-2">
            <div className="diagnostic__cards--text">
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">
                    Psicólogas y terapeuta ocupacional.
                  </span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="C) Cita tdah diva 1h3mins 200€ psicóloga">
            <div className="diagnostic__cards--text">
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicóloga.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="D) Cita autismo juicio clínico (nos basamos en el dsm5/cie11, perspectiva  neuro divergencias) + test cribado (cat-q, raads,aspie quiz).">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Con antelación te enviamos los test autoaplicables, los realizas
                y nos los envías antes de la cita. Durante la cita analizamos
                tus respuestas, realizamos juicio clínico, analizamos tus rasgos
                respecto al manual diagnóstico y el paradigma de las
                neurodivergencias.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="E) Cita tdah juicio clínico (dsm5/cie11, perspectiva neurodivergencias) + test cribado (ars-5, wender utah).">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Con antelación te enviamos los test autoaplicables, los realizas
                y nos los envías antes de la cita. Durante la cita analizamos
                tus respuestas, realizamos juicio clínico, analizamos tus rasgos
                respecto al manual diagnóstico y el paradigma de las
                neurodivergencias.
              </p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">Psicólogas y neuropsicólogas.</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">1h 30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">200€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="F) Entrevista familiar/vincular.">
            <div className="diagnostic__cards--text">
              <p> Entrevista a familiar/amistad/pareja.</p>
              <br></br>

              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Profesionales:{' '}
                  <span className="bold">
                    Psicólogas y terapeuta ocupacional.
                  </span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Duración: <span className="bold">30mins</span>
                </li>
              </ul>
              <br />
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Precio: <span className="bold">50€</span>
                </li>
              </ul>
            </div>
          </CollapsibleCard>
        </div>
      </section>
      <section className="summary">
        <p className="diagnostic__text">
          <span className="bold">Si debido a tu caso</span> es necesario, te
          recomendaremos realizar alguna de las siguientes citas:
        </p>
      </section>
      <section className="summary" style={{ marginTop: '0px' }}>
        <div className="diagnostic__cards--text diagnostic__text">
          <ul className="diagnostic__listdata">
            <li className="diagnostic__listdata--item">
              Cita para evaluar el perfil sensorial: <strong> 135€.</strong>
            </li>
            <li className="diagnostic__listdata--item">
              Cita entrevista clínica ADI-R:: <strong> 100€.</strong>
            </li>
            <li className="diagnostic__listdata--item">
              Cita para evaluar co-ocurrencias (Ansiedad Social, Depresión, TOC,
              TLP):<strong> 80€.</strong>
            </li>
            <li className="diagnostic__listdata--item">
              Cita evaluación trauma (evaluación con test EEGS-R):
              <strong> 80€.</strong>
            </li>
            <li className="diagnostic__listdata--item">
              Cita cribado/asesoramiento médico/farmacológico:{' '}
              <strong> 80€.</strong>
            </li>
          </ul>
          <p style={{ fontStyle: 'italic', fontSize: '14px' }}>
            *El pago se realiza por cada cita, por adelantado, a la profesional
            que te evalúe.
          </p>
        </div>
      </section>
      <section className="summary">
        <p className="diagnostic__text">
          Nuestro diagnóstico es <span className="bold"> oficial/formal</span> y
          lo realizan las <span className="bold">Neurodiversidad</span>? El
          diagnóstico es un proceso que sólo pueden realizar los{' '}
          <span className="bold">
            psicólogas, neuropsicóloga y terapeuta ocupacional colegiadas,
            formadas ampliamente en autismo, (t)dah y co-ocurrencias.
          </span>{' '}
          Están{' '}
          <span className="bold">
            formadas en las evaluaciones/test aplicados, y se basan en formación
            actualizada{' '}
          </span>
          y desde la perspectiva de las{' '}
          <span className="bold">neurodivergencias (no patologizante).</span>
        </p>
        <br></br>
        <p className="diagnostic__text">
          Ofrecemos un{' '}
          <span className="bold">
            trato humano sensible con las opresiones sistemáticas. Realizamos un
            informe final{' '}
          </span>
          describiendo todo el{' '}
          <span className="bold">
            {' '}
            proceso diagnóstico y todo lo observado, fortalezas y dificultades.{' '}
          </span>
          Puedes usarlo para{' '}
          <span className="bold">
            conocerte, para solicitar la discapacidad, adaptaciones en el puesto
            de trabajo, estudios…
          </span>
        </p>{' '}
        <br></br>
        <p className="diagnostic__text">
          ¿Por qué nos especializamos en{' '}
          <span className="bold">
            “Autismo en femenino”, diagnóstico de Autismo en mujeres adultas y
            diagnóstico de (T)DAH en mujeres
          </span>
          ? Sabemos que debido a la falta de actualización y los sesgos, es
          común que las mujeres, personas AFAB, disidentes y racializadas
          encuentren{' '}
          <span className="bold">
            muchas limitaciones para conseguir su diagnóstico.
          </span>{' '}
          Queremos contribuir con nuestras experiencias y formaciones para
          ofrecer un lugar seguro.
        </p>
        <br></br>
        <p className="diagnostic__text">
          ¿Por qué lo realizamos <span className="bold">vía online</span>? Somos
          conscientes de las{' '}
          <span className="bold">
            dificultades sociales y para desplazarse de la comunidad
            neurodivergente,
          </span>{' '}
          por lo que apostamos por un servicio online en la comodidad y
          familiaridad de tu casa.{' '}
          <span className="bold">
            Podemos realizar todas las pruebas mediante este formato.
          </span>
        </p>
      </section>
      <Footer />
    </>
  );
}
