import { H2, H3, MainArticle, P } from "../Components";

export default () => {
  return (
    <aside className="col-span-1 flex flex-col items-start justify-center  gap-4 bg-zinc-50 p-8 text-zinc-800">
      <MainArticle>
        <H2>À propos</H2>
        <P>
          Développeur front-end spécialisé en <strong>React</strong> et
          <strong>TypeScript</strong>, je conçois des applications
          professionnelles robustes en privilégiant les bonnes pratiques (Clean
          Architecture, TDD) et en créant des composants d'interface
          réutilisables entièrement testés avec des librairies telles que
          <strong>TailwindCSS</strong>, MUI ou vanilla-extract.
        </P>
        <P>
          En veille permanente sur les évolutions technologiques du web,
          j'oriente actuellement ma progression vers le développement full-stack
          avec un focus sur l'architecture hexagonale et le DDD.
        </P>
      </MainArticle>
      <MainArticle>
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
            <H3>Adresse</H3>
            <P>
              20B Rue Garibaldi
              <br />
              38600 Fontaine
            </P>
          </div>
        </address>
      </MainArticle>
    </aside>
  );
};
