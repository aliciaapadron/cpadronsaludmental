import { Footer } from '../Footer';
import { Header } from '../Header';
import personalpicture from '../../images/fotokiti-bn.png';
import logo from '../../images/logokiti.png';

export function Home(props) {
  return (
    <>
      <Header />
      <section className="piccontainer">
        <img
          className="piccontainer__personalpicture"
          src={personalpicture}
          alt="Foto personal"
          title="Foto personal"
        />
        <img
          className="piccontainer__logo"
          src={logo}
          alt="Logo cpadronsaludmental"
          title="Logo cpadronsaludmental"
        />
      </section>
      <Footer />
    </>
  );
}
