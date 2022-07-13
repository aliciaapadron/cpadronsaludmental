import { Footer } from '../Footer';
import { Header } from '../Header';

export function Articles() {
  return (
    <>
      <Header />
      <section className="artsection">
        <h2 className="artsection__title">
          Aquí podrás encontrar links a mis trabajos y artículos.
        </h2>
        <nav className="artsection__nav">
          <a
            className="artsection__nav--article"
            href="https://www.rtve.es/noticias/20210831/positividad-toxica/2165823.shtml"
            target="_blank"
            rel="noreferrer"
            title="Ir al artículo"
          >
            La positividad tóxica: "Una manera bonita de decir 'invalida tus
            emociones y se autoexigente.'". <br />
            <span className="artsection__nav--span">
              -Artículo de <span className="underline">rtve</span> sobre la
              positividad tóxica-
            </span>
          </a>
          <a
            className="artsection__nav--article"
            href="https://www.vice.com/es/article/4avj5d/que-es-la-positividad-toxica-y-como-nos-afecta"
            target="_blank"
            rel="noreferrer"
            title="Ir al artículo"
          >
            ¿Qué es la positividad tóxica y cómo nos afecta? Esa falsa felicidad
            que vemos todos los días en las redes sociales de influencers nos
            está causando depresión y ansiedad. <br />
            <span className="artsection__nav--span">
              -Artículo de <span className="underline">VICE</span> sobre la
              positividad tóxica-
            </span>
          </a>
          <a
            className="artsection__nav--article"
            href="http://70.36.107.45:3000/como-afecta-fingir-que-estamos-bien-el-independiente.html"
            target="_blank"
            rel="noreferrer"
            title="Ir al artículo"
          >
            ¿Cómo afecta fingir que estamos bien? <br />
            <span className="artsection__nav--span">
              -Artículo de <span className="underline">El Independiente</span>{' '}
              sobre la positividad tóxica-
            </span>
          </a>
          <a
            className="artsection__nav--article"
            href="https://www.instagram.com/p/CdkZVX-j30O/?igshid=MDJmNzVkMjY%3D"
            target="_blank"
            rel="noreferrer"
            title="Ir al artículo"
          >
            La importancia sobre diagnosticar o comunicar el autismo. <br />
            <span className="artsection__nav--span">
              -Artículo de <span className="underline">Autiblog</span> sobre el
              diagnostico autista-
            </span>
          </a>
          <a
            className="artsection__nav--article"
            href="https://autiblog.bio.link/"
            target="_blank"
            rel="noreferrer"
            title="Ir al artículo"
          >
            Link a <span className="underline">Autiblog</span> para leer el
            anterior artículo completo.
          </a>
        </nav>
      </section>
      <Footer />
    </>
  );
}
