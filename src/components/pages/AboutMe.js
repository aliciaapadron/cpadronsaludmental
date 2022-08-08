import { Footer } from '../Footer';
import { Header } from '../Header';
import eli from '../../images/eli.png';

export function AboutMe() {
  return (
    <>
      <Header />
      <section className="aboutsection">
        <h2 className="aboutsection__title">
          Conóceme <br />
        </h2>

        <img
          className="aboutsection__img"
          src={eli}
          alt="Imagen de Cris y Eli"
          title="Imagen de Cris y Eli"
        />
        <p className="aboutsection__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          hic eos, soluta dolorem, ea explicabo incidunt in quod ratione
          facilis, corporis expedita odit exercitationem dolorum rem. Suscipit
          similique ad incidunt! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel enim consectetur sint corrupti quod, molestiae
          facere dignissimos nam repudiandae aspernatur optio facilis
          voluptatem, libero exercitationem tempore at eius. Numquam, corrupti!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          minus deleniti inventore unde maxime ab tempore, asperiores, aliquam
          magnam laudantium dolores fugit incidunt. Perspiciatis recusandae
          deleniti maiores, sapiente doloremque ex.
        </p>
      </section>
      <Footer />
    </>
  );
}
