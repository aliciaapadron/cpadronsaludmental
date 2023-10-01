import { Footer } from '../Footer';
import { Header } from '../Header';

export function PrivacyCookies() {
  return (
    <>
      <Header />
      <section className="aboutsection">
        <h2 className="aboutsection__title">Política de Cookies</h2>
      </section>
      <section className="legalpagessection">
        <p className="legalpagessection__text">
          <span className="bold">1. ¿ QUÉ SON LAS COOKIES ?</span>
        </p>
        <p className="legalpagessection__text">
          Las Cookies son pequeños archivos que se instalan en el terminal del
          USUARIO al visitar un sitio web con la finalidad de almacenar datos
          que podrán ser actualizados y recuperados por el responsable de su
          instalación. Si el USUARIO no se registra ni deja información personal
          en el sitio, el servidor tendrá conocimiento de que alguien con esa
          cookie regresó al sitio web pero le será imposible asociar la
          navegación a un USUARIO concreto e identificado.
        </p>
        <p className="legalpagessection__text">
          <span className="bold">2. ¿ QUÉ CLASES DE COOKIES EXISTEN ?</span>
        </p>
        <p className="legalpagessection__text">
          <p className="legalpagessection__text--subp">
            Las Cookies, en función de su caducidad, pueden clasificarse en
            Cookies de sesión o permanentes. Las primeras expiran cuando el
            usuario cierra el navegador mientras que las segundas permanecen por
            un tiempo superior durante el cual los datos siguen almacenados en
            el terminal y pueden ser accedidos y tratados.
          </p>
          <p className="legalpagessection__text--subp">
            También se pueden distinguir según la entidad que gestione el equipo
            o dominio desde donde se envían las Cookies y se traten los datos
            que se obtengan. En este caso, se clasifican como:
          </p>
          <ul>
            <li className="legalpagessection__text--li">
              Cookies propias: aquellas que se envían al equipo terminal del
              Usuario desde un equipo o dominio gestionado por el Titular de la
              Web y desde el que se presta el servicio solicitado por el propio
              Usuario.
            </li>
            <li className="legalpagessection__text--li">
              Cookies propias: aquellas que se envían al equipo terminal del
              Usuario desde un equipo o dominio gestionado por el Titular de la
              Web y desde el que se presta el servicio solicitado por el propio
              Usuario.
            </li>
          </ul>
          <p className="legalpagessection__text--subp">
            Las Cookies también se pueden clasificar en función de su objetivo y
            por tanto podemos hablar de:
          </p>
          <ul>
            <li className="legalpagessection__text--li">
              Cookies Técnicas: permiten al Usuario la navegación a través de
              una página web, plataforma o aplicación y la utilización de las
              diferentes opciones o servicios que en ella existan como, por
              ejemplo, controlar el tráfico y la comunicación de datos,
              identificar la sesión o realizar el proceso de compra de un
              pedido.
            </li>
            <li className="legalpagessection__text--li">
              Cookies de Personalización: permiten al Usuario acceder al
              servicio con algunas características de carácter general
              predefinidas en función de una serie de criterios en el terminal
              del usuario como por ejemplo el idioma o el tipo de navegador.
            </li>
            <li className="legalpagessection__text--li">
              Cookies Analíticas: permiten al responsable de las mismas, el
              seguimiento y análisis del comportamiento de los usuarios de los
              sitios web a los que están vinculadas. La información recabada se
              utiliza en la medición de la actividad de los sitios web,
              aplicación o plataforma y para la elaboración de perfiles de
              navegación de los usuarios de dichos sitios, aplicaciones y
              plataformas, con el fin de introducir mejoras en función del
              análisis de los datos que hacen los usuarios del servicio.
            </li>
            <li className="legalpagessection__text--li">
              Cookies Analíticas: permiten al responsable de las mismas, el
              seguimiento y análisis del comportamiento de los usuarios de los
              sitios web a los que están vinculadas. La información recabada se
              utiliza en la medición de la actividad de los sitios web,
              aplicación o plataforma y para la elaboración de perfiles de
              navegación de los usuarios de dichos sitios, aplicaciones y
              plataformas, con el fin de introducir mejoras en función del
              análisis de los datos que hacen los usuarios del servicio.
            </li>
          </ul>
        </p>
        <p className="legalpagessection__text">
          <span className="bold">
            3. ¿ CÓMO DESACTIVAR O ELIMINAR COOKIES ?
          </span>
        </p>
        <p className="legalpagessection__text">
          El Usuario podrá configurar su navegador para que no se instalen
          cookies o para recibir un aviso en pantalla cada vez que una cookie
          quiera instalarse, pudiendo decidir en cada momento si la quiere
          aceptar o no. Igualmente el usuario podrá decidir posteriormente
          eliminar las cookies que tenga instaladas cambiando la configuración
          de su navegador o El Usuario podrá configurar su navegador para que no
          se instalen cookies o para recibir un aviso en pantalla cada vez que
          una cookie quiera instalarse, pudiendo decidir en cada momento si la
          quiere aceptar o no. Igualmente el usuario podrá decidir
          posteriormente eliminar las cookies que tenga instaladas cambiando la
          configuración de su navegador o:
        </p>
        <ul className="legalpagessection__text">
          <li className="legalpagessection__text--links">
            <a
              className="legalpagessection__text--link"
              href="https://support.google.com/chrome/answer/95647?hl=es"
            >
              Google Chrome
            </a>
          </li>
          <li className="legalpagessection__text--links">
            <a
              className="legalpagessection__text--link"
              href="https://support.apple.com/es-es/HT201265"
            >
              Safari
            </a>
          </li>
          <li className="legalpagessection__text--links">
            <a
              className="legalpagessection__text--link"
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
            >
              Mozilla Firefox
            </a>
          </li>
        </ul>
        <p className="legalpagessection__text">
          <span className="bold">4. ¿ QUÉ COOKIES USA ÉSTE SITIO WEB ?</span>
        </p>
        <p className="legalpagessection__text">
          <table className="table">
            <tr className="table__tr">
              <td className="table__tr--title">NOMBRE</td>
              <td className="table__tr--title">DOMINIO</td>
              <td className="table__tr--title">FINALIDAD</td>
              <td className="table__tr--title">CADUCIDAD</td>
              <td className="table__tr--title">TIPO</td>
            </tr>
            <tr className="table__tr">
              <td className="table__tr--td">CookieConsent</td>
              <td className="table__tr--td">cpadronsaludmental.com</td>
              <td className="table__tr--td">
                Cookie necesaria para guardar las preferencias del usuario sobre
                las cookie
              </td>
              <td className="table__tr--td">1 Años</td>
              <td className="table__tr--td">Necesarias</td>
            </tr>
            <tr className="table__tr">
              <td className="table__tr--td">_ga</td>
              <td className="table__tr--td">cpadronsaludmental.com</td>
              <td className="table__tr--td">
                Cookie usada para almacenar y contar las páginas vistas
              </td>
              <td className="table__tr--td">2 Años</td>
              <td className="table__tr--td">Analíticas</td>
            </tr>
          </table>
        </p>
      </section>

      <Footer />
    </>
  );
}
