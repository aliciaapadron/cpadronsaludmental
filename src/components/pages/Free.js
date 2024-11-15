import { Footer } from '../Footer';
import { Header } from '../Header';

import resumen2 from '../../images/resumen2.JPG';
import pulmones from '../../images/pulmones.png';

export function Free() {
  return (
    <>
      <Header />
      <div className="team__cards">
        <h1>Material gratuito</h1>
        <h2 style={{ fontStyle: 'italic' }}>
          Descarga gratis las siguientes plantillas:
        </h2>
        <br />
        <div className="team__cards--text">
          <section className="freesection">
            <section className="explanation">
              <ul className="freelist__list">
                <li className="freelist__list--item">
                  <a
                    className="emailLink"
                    href="https://www.medicinatudela.com/_files/ugd/ce63e2_eb7cb7056218400f91b21acb427e7cf3.pdf"
                    title="Descargar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Plantilla para tu cita ginecológica
                  </a>
                </li>
                <li className="freelist__list--item">
                  {' '}
                  <a
                    className="emailLink"
                    href="https://www.medicinatudela.com/_files/ugd/ce63e2_4c0618e258fe47fdb7c865bfb9e334b9.pdf"
                    title="Descargar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Plantilla para tu cita general
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
