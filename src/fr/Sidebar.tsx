import { Phone } from "lucide-react";
import { H1, H2, H3, MainArticle, P } from "../Components";

export default () => {
  return (
    <header className="flex flex-col items-start justify-center gap-4 bg-zinc-50 p-8 text-zinc-800">
      <div className="grid grid-cols-2 gap-12">
        <H1 className="text-zinc-700">
          <span className="text-3xl">Lucas Leroux</span>
          <span className="text-lg">
            Développeur front-end | React & TypeScript
          </span>
        </H1>

        <MainArticle className="gap-2">
          <H2 className="text-lg font-bold uppercase">Coordonnées</H2>
          <address className="grid grid-cols-2 grid-rows-2 gap-1 not-italic">
            <div className="flex items-center gap-1">
              {/* <H3>Téléphone</H3> */}
              <h3>
                <Phone size={12} aria-hidden="true" />
                <span className="sr-only">Téléphone</span>
              </h3>

              <a
                className="leading-tight tracking-tight"
                href="tel:+33645716476"
              >
                06 45 71 64 76
              </a>
            </div>

            <div>
              {/* <H3>Email</H3> */}
              <a className="leading-tight" href="mailto:lucas.leroux@pm.me">
                lucas.leroux@pm.me
              </a>
            </div>

            <div>
              {/* <H3>LinkedIn</H3> */}
              <a
                className="leading-tight"
                href="https://www.linkedin.com/in/llrx/"
              >
                linkedin.com/in/llrx
              </a>
            </div>

            <div>
              {/* <H3>Lieux</H3> */}
              <P>Grenoble, Lyon, Chambéry, Annecy</P>
            </div>
          </address>
        </MainArticle>
      </div>

      <hr />

      <MainArticle className="gap-2">
        <H2>À propos</H2>
        <div className="grid grid-cols-2 gap-12">
          <P>
            Développeur front-end spécialisé en <strong>React</strong> et{" "}
            <strong>TypeScript</strong>, je conçois des applications
            professionnelles robustes en privilégiant les bonnes pratiques
            (Clean Architecture, TDD) et en créant des composants d'interface
            réutilisables entièrement testés avec des librairies telles que{" "}
            <strong>TailwindCSS</strong>, MUI ou vanilla-extract.
          </P>
          <P>
            En veille permanente sur les évolutions technologiques du web,
            j'oriente actuellement ma progression vers le{" "}
            <strong>développement full-stack</strong>, prêt à maîtriser tout
            nouveau langage ou framework pour continuer à innover et à relever
            de nouveaux défis dans ce domaine.
          </P>
        </div>
      </MainArticle>

      <hr />

      <MainArticle className="gap-2">
        <H2 className="text-lg font-bold uppercase">Coordonnées</H2>
        <address className="flex flex-col gap-1 not-italic">
          <div>
            <H3>Téléphone</H3>
            <a className="leading-tight tracking-tight" href="tel:+33645716476">
              06 45 71 64 76
            </a>
          </div>

          <div>
            <H3>Email</H3>
            <a className="leading-tight" href="mailto:lucas.leroux@pm.me">
              lucas.leroux@pm.me
            </a>
          </div>

          <div>
            <H3>LinkedIn</H3>
            <a
              className="leading-tight"
              href="https://www.linkedin.com/in/llrx/"
            >
              linkedin.com/in/llrx
            </a>
          </div>

          {/* <div>
            <H3>Site</H3>
            <a className="leading-tight" href="https://lucas-leroux.dev/">
              lucas-leroux.dev
            </a>
          </div> */}

          <div>
            <H3>Lieux</H3>
            <P>Grenoble, Lyon, Chambéry, Annecy</P>
          </div>
        </address>
      </MainArticle>
    </header>
  );
};
