import { Footer } from '../Footer';
import { Header } from '../Header';

export function Contact() {
  return (
    <>
      <Header />
      <section className="contactsection">
        <h2 className="contactsection__title">
          Encuentra comunidad Autista y (T)DAH en mis RRSS:
        </h2>
        <ul className="contactsection__list">
          <li className="contactsection__list--item">
            <i class="icon fa-brands fa-instagram"></i>
            <a
              className="contactlink"
              href="https://instagram.com/c.padronsaludmental?igshid=YmMyMTA2M2Y="
              title="Ir a instagram"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="contactsection__list--item">
            <i className="icon fa-brands fa-linkedin"></i>
            <a
              className="contactlink"
              href="https://www.linkedin.com/company/c-padr%C3%B3n-salud-mental/"
              title="Ir a linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="contactsection__list--item">
            <i className="icon fa-brands fa-tiktok"></i>
            <a
              className="contactlink"
              href="https://www.tiktok.com/@c.padonsaludmental"
              title="Ir a tiktok"
              target="_blank"
              rel="noreferrer"
            >
              Tiktok
            </a>
          </li>
          <li className="contactsection__list--item">
            <i class="icon fa-brands fa-youtube"></i>
            <a
              className="contactlink"
              href="https://www.youtube.com/channel/UCv-mEw1OLDSKjYysnaEd1nQ"
              title="Ir a youtube"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>

          <li className="contactsection__list--item">
            <i className="icon fa-solid fa-paper-plane"></i>
            <a
              className="contactlink"
              href="https://forms.gle/XczPAoxwFhU7NZBU9"
              title="Rellena el formulario"
              target="_blank"
              rel="noreferrer"
            >
              Rellena el formulario y empieza tu proceso
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
