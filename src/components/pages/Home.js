import { Footer } from '../Footer';
import { Header } from '../Header';
import personalpicture from '../../images/fotokiti-bn.png';
import logo from '../../images/logokiti.png';

export function Home() {
  return (
    <>
      <Header />
      <section className="piccontainer">
        <p className="description">
          Soy Cris, asesora en Neurodivergencias y terapeuta experta en Autismo,
          (T)DAH y AACC.
          <br></br>
          Equipo de Psicólogas y Terapeuta Ocupacional Neurodivergentes.
          <br></br>
          Diagnóstico diferencial en autismo, altas capacidades y (T)DAH.
          <br></br>
          Asesoría a emprededoras y supervisión a Terapeutas.
        </p>

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
