import { Footer } from '../Footer';
import { Header } from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';

export function Contact() {
  return (
    <>
      <Header />
      <section className="contactsection">
        <h2 className="contactsection__title">
          Aquí podrás encontrar mis redes sociales y mi email.
        </h2>
        <ul className="contactsection__list">
          <li className="contactsection__list--item">
            <FontAwesomeIcon className="icon" icon={faHashtag} />
            <a
              className="contactlink"
              href="https://instagram.com/c.padronsaludmental?igshid=YmMyMTA2M2Y="
              title="Ir a instagram"
            >
              Instagram
            </a>
          </li>
          <li className="contactsection__list--item">
            <FontAwesomeIcon className="icon" icon={faBriefcase} />
            <a
              className="contactlink"
              href="https://www.linkedin.com/company/c-padr%C3%B3n-salud-mental/"
              title="Ir a linkedin"
            >
              Linkedin
            </a>
          </li>
          <li className="contactsection__list--item">
            <FontAwesomeIcon className="icon" icon={faMusic} />
            <a
              className="contactlink"
              href="https://www.tiktok.com/@c.padonsaludmental"
              title="Enviar un email"
            >
              Tiktok
            </a>
          </li>
          <li className="contactsection__list--item">
            <FontAwesomeIcon className="icon" icon={faVideoCamera} />
            <a
              className="contactlink"
              href="https://www.youtube.com/channel/UCv-mEw1OLDSKjYysnaEd1nQ"
              title="Enviar un email"
            >
              Youtube
            </a>
          </li>

          <li className="contactsection__list--item">
            <FontAwesomeIcon className="icon" icon={faMessage} />
            <a
              className="contactlink"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
            >
              Email
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
