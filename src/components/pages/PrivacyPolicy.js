import { Footer } from '../Footer';
import { Header } from '../Header';

export function PrivacyPolicy() {
  return (
    <>
      <Header />
      <section className="aboutsection">
        <h2 className="aboutsection__title">Política de Privacidad</h2>
      </section>
      <section className="legalpagessection">
        <p className="legalpagessection__text">
          <span className="bold">
            1. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO
          </span>
        </p>
        <p className="legalpagessection__text">
          Cristina Padrón Pasquín - C. PADRÓN SALUD MENTAL con CIF 05452877Z, en
          adelante el RESPTTO, con domicilio en Madrid (Madrid), en C/ Celanova
          nº 1 4º 4, y correo electrónico CPADRONSALUDMENTAL@GMAIL.COM, es el
          Titular de ésta Web y Responsable del Tratamiento de Datos Personales
          del Usuario y le informa que la información facilitada será tratada de
          conformidad con lo dispuesto por el Reglamento UE de Protección de
          Datos 679/2016 y la Ley Orgánica 3/2018 de Protección de Datos
          Personales y garantía de los derechos digitales, informándole que:
        </p>
        <p className="legalpagessection__text">
          <span className="bold">
            2. FINALIDADES Y LEGITIMACIÓN DEL TRATAMIENTO
          </span>
        </p>
        <p className="legalpagessection__text">
          <ul>
            <li className="legalpagessection__text--li">
              Ofrecerle una mejor experiencia de Usuario a través de mejoras que
              implantemos en la interfaz y operativa web.
            </li>
            <li className="legalpagessection__text--li">
              Enviarle comunicaciones informativas y/o promocionales si Vd.
              facilita sus datos de contacto y consentimiento.
            </li>
          </ul>
        </p>

        <p className="legalpagessection__text">
          <span className="bold">3. PLAZOS DE CONSERVACIÓN</span>
        </p>
        <p className="legalpagessection__text">
          Los datos proporcionados se conservarán hasta que el Usuario solicite
          la supresión de sus datos. Una vez comunicado por parte del interesado
          la supresión de sus datos, se procederá a su bloqueo y posterior
          cancelación en nuestros ficheros o devolución al titular de los datos,
          según el caso, de los soportes en los que se recoja la información
          facilitada, sin que se admita la conservación de copias de dicha
          información.
        </p>
        <p className="legalpagessection__text">
          <span className="bold">4. COMUNICACIÓN DE LAS DATOS A TERCEROS</span>
        </p>
        <p className="legalpagessection__text">
          Sus datos únicamente serán utilizados para los fines antes señalados y
          no serán cedidos a terceros, salvo aquellas comunicaciones a las
          Autoridades, Organismos u Oficinas de las Administraciones Públicas
          que fueran consentidas por el Usuario o persona autorizada por él/ella
          para el adecuado cumplimiento de las obligaciones nacidas de los
          servicios prestados, o que resultaren preceptivas o autorizadas por
          Ley.
        </p>
        <p className="legalpagessection__text">
          <span className="bold">5. DEBER DE CONFIDENCIALIDAD</span>
        </p>
        <p className="legalpagessection__text">
          El RESPTTO garantiza la confidencialidad de los datos personales que
          obren en sus ficheros y adoptará las medidas reglamentarias que
          eviten, en la medida de lo posible, su alteración, pérdida,
          tratamiento o acceso no autorizado.
        </p>
        <p className="legalpagessection__text">
          <span className="bold">6. EJERCICIO DE DERECHOS</span>
        </p>
        <p className="legalpagessection__text">
          El Usuario tiene derecho a acceder a sus datos personales, rectificar
          los datos inexactos o solicitar su supresión cuando los datos ya no
          sean necesarios. En determinadas ocasiones los interesados podrán
          solicitar la limitación del tratamiento de sus datos, en cuyo caso
          únicamente los conservaremos para el ejercicio o la defensa de
          reclamaciones. El Usuario puede ejercitar sus derechos debiendo
          dirigir su petición por escrito e identificánose suficientemente a la
          dirección electronica CPADRONSALUDMENTAL@GMAIL.COM. También tiene
          derecho a retirar su consentimiento al tratamiento de sus datos
          personales en cualquier momento y a presentar la reclamación que
          considere oportuna ante la Autoridad de Control.
        </p>
      </section>

      <Footer />
    </>
  );
}
