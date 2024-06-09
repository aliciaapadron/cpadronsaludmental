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
          <span className="bold">mayores de 18 años </span> con fluidez verbal
          fluida.
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
        <p className="diagnostic__title">FASE SCREENING/CRIBADO:</p>
        <div className="diagnostic__cards">
          <CollapsibleCard title="CITA 1">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Durante esta primera cita nos contarás tus sospechas, te
                mandaremos test (posteriormente los corregiremos) y te
                anticiparemos el proceso (qué fases quedan, cuál es la siguiente
                y a quién realizar el pago). Esta cita es obligatoria.
              </p>
              <br></br>
              <span className="bold">Test:</span>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Autismo: cat-q,raads,aspie qui
                </li>
                <li className="diagnostic__listdata--item">
                  Cribado aacc: lista de rasgos
                </li>
                <li className="diagnostic__listdata--item">
                  (T)dah: ars-5, wender utah
                </li>
              </ul>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Cris/Candela/María/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 160€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA 2">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Durante esta cita realizaremos la entrevista psicológica, la
                evaluación personal y la evaluación de Trauma. Esta cita no es
                obligatoria pero sí recomendable.
              </p>
              <br></br>
              <span className="bold">Test:</span>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">EGS-R.</li>
              </ul>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga: <span className="bold">Lorena/Candela</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 80€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA CON FAMILIAR">
            <div className="diagnostic__cards--text">
              <p>
                Durante esta cita realizaremos una entrevista a un familiar/ser
                querido en la que haremos preguntas sobre hitos desarrollo,
                dificultades de sueño, características en la infancia,
                adolescencia y adultez. Esta cita no es obligatoria pero sí
                recomendable.
              </p>

              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Candela/Lorena/María/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 80€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA 3">
            <div className="diagnostic__cards--text">
              <p>
                Durante esta cita realizaremos la devolución de impresiones y
                resultados. Te daremos anticipación de la siguiente fase del
                proceso. Esta cita es obligatoria.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Cris/María/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 80€</p>
              <br />
              <p className="bold">
                (En el caso de descartar Autismo y (T)DAH recomendamos hacer el
                el Perfil Sensorial para dar respuesta y aprender a gestionar
                los desafíos de la vida diaria)
              </p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
        </div>
      </section>
      <section className="diagnostic">
        <p className="diagnostic__title">FASE DIAGNÓSTICO:</p>
        <div className="diagnostic__cards">
          <CollapsibleCard title="CITA TEST PERSONALIDAD">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Realizaremos test de personalidad: Millon test. Durante esta
                cita te pediremos la historia clínica y la línea de vida (las
                cuales corregiremos más tarde). También te anticiparemos la
                siguiente cita. Esta cita es obligatoria.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Lorena/Candela/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 200€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA PERFIL SENSORIAL">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Previamente te enviaremos un test para que hagas en casa.
                Durante la cita realizaremos la evaluación del Perfil sensorial
                y un informe pautando la dieta sensorial (recomendaciones para
                que te encuentres más regulada/o/e) Esta cita es opcional pero
                recomendable ya que te ofrecerá herramientas para aumentar tu
                calidad de vida. Además, el Perfil Sensorial te servirá para
                solicitar la Discapacidad.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga: <span className="bold">María</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 135€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA (T)DAH">
            <div className="diagnostic__cards--text">
              <p>
                Durante esta cita repasaremos los test DIVA y test de Brown que
                te habremos enviado previamente. También te anticiparemos la
                siguiente cita. Esta cita es obligatoria si los test de cribado
                indican la presencia de (T)DAH. De no ser así, es opcional.
              </p>

              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Candela/Lorena/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 100€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA AUTISMO">
            <div className="diagnostic__cards--text">
              <p>
                Durante esta cita realizaremos el test de evaluación de autismo
                ADOS-2. También te anticiparemos la siguiente cita. Esta cita es
                obligatoria si los test de cribado indican la presencia de
                Autismo. De no ser así, es opcional.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga: <span className="bold">María</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 200€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA CO-OCURRENCIAS">
            <div className="diagnostic__cards--text">
              <p>
                Si durante la exploración hemos observado co-ocurrencias,
                realizaremos esta cita en la que se pasarán test. Por ejemplo de
                Ansiedad social, TOC, TLP… Esta cita es opcional.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Lorena/Ana Belén</span>
                </li>
              </ul>
              <br />
              <p className="bold">Precio: 80€</p>
              <br></br>
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="CITA DEVOLUCIÓN">
            <div className="diagnostic__cards--text">
              <p>
                {' '}
                Durante esta cita te explicaremos los datos obtenidos, las
                conclusiones y el informe.
              </p>
              <br></br>
              <ul className="diagnostic__listdata">
                <li className="diagnostic__listdata--item">
                  Quién se encarga:{' '}
                  <span className="bold">Cris/María/Ana Belén</span>
                </li>
              </ul>
              <br></br>
              <p className="bold">Precio: 80€</p>

              <br />
              <ul className="diagnostic__listdata">
                <span className="bold">Qué incluye el informe:</span>
                <li className="diagnostic__listdata--item">
                  Resultado de los test de cribado (autismo:
                  camuflaje,raads,aspie quiz. cribado aacc: listas rasgos. tdah:
                  ars-5, wender utah).
                </li>
                <li className="diagnostic__listdata--item">
                  Resultado de la evaluación de trauma y test EGS-R.
                </li>
                <li className="diagnostic__listdata--item">
                  Datos obtenidos durante la cita con tu familiar/ser querido.
                </li>
                <li className="diagnostic__listdata--item">
                  Resultados test personalidad .{' '}
                </li>
                <li className="diagnostic__listdata--item">
                  Resultados Perfil sensorial y dieta sensorial.
                </li>
                <li className="diagnostic__listdata--item">
                  Resultados test (T)DAH.
                </li>
                <li className="diagnostic__listdata--item">
                  Resultados test Autismo.
                </li>
                <li className="diagnostic__listdata--item">
                  Co-ocurrencias si se han observado.
                </li>
                <li className="diagnostic__listdata--item">Recomendaciones.</li>
              </ul>
              <br />
              <p className="clarification">
                <span className="bold">Opciones de pago:</span> El pago debe
                realizarse por cada cita, antes de cada cita se facilitará la
                información de pago y los plazos (Recibirás con antelación un
                PDF la anticipación de la información de pago). Se recomienda
                tener las citas semanal o quincenalmente. *Todas las partes
                están revisadas por todas las profesionales.
              </p>
            </div>
          </CollapsibleCard>
        </div>
      </section>
      <section className="summary">
        <p className="diagnostic__text">
          ¿Por qué usamos el término <span className="bold">“Diagnóstico”</span>{' '}
          si trabajamos desde el paradigma de la{' '}
          <span className="bold">Neurodiversidad</span>? El diagnóstico es un
          proceso que sólo pueden realizar los{' '}
          <span className="bold">médicos (psiquiatras, neurólogos…)</span> y
          suele referirse a{' '}
          <span className="bold">“encontrar una enfermedad”</span>. Entendemos
          las connotaciones negativas del término, sin embargo, entendemos
          también que es el{' '}
          <span className="bold">
            concepto más extendido y fácil de entender
          </span>
          . Actualmente suelen usarse los términos “Detección” o “Evaluación”
          para sustituirla, pero da lugar a confusiones, por lo que, finalmente
          decidimos usar el término “Diagnóstico”, para{' '}
          <span className="bold">facilitar la comprensión</span> y la búsqueda
          en internet.
        </p>
        <br></br>
        <p className="diagnostic__text">
          ¿Por qué nos especializamos en{' '}
          <span className="bold">
            “Autismo en femenino”, diagnóstico de Autismo en mujeres adultas y
            diagnóstico de (T)DAH en mujeres
          </span>
          ? Sabemos que debido a la{' '}
          <span className="bold">falta de actualización y los sesgos</span>, es
          común que las mujeres, personas AFAB, disidentes y racializadas
          encuentren{' '}
          <span className="bold">
            muchas limitaciones para conseguir su diagnóstico
          </span>
          . Queremos contribuir con nuestras experiencias y formaciones para
          ofrecer un
          <span className="bold"> lugar seguro</span>.
        </p>{' '}
        <br></br>
        <p className="diagnostic__text">
          ¿Por qué lo realizamos <span className="bold">vía online</span>? Somos
          conscientes de las dificultades sociales y para desplazarse de la
          comunidad neurodivergente, por lo que apostamos por un servicio online
          en la{' '}
          <span className="bold">comodidad y familiaridad de tu casa</span>.
          Podemos realizar todas las pruebas mediante este formato.
        </p>
      </section>
      <Footer />
    </>
  );
}
