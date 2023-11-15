import { H2, H3, MainArticle, P } from "../Components";

export default () => {
  return (
    <aside className="col-span-1 flex flex-col items-start justify-center  gap-4 bg-zinc-50 p-8 text-zinc-800">
      <MainArticle>
        <H2>À propos</H2>
        <P>
          Je suis un développeur front&#8209;end avec une expérience avérée en
          matière de développement d'application à visée professionnelle.
        </P>
        <P>
          J'ai également un fort attrait pour les tâches d'intégration et les
          projets valorisant la construction d'éléments d'interfaces cohérents,
          testés et réutilisables.
        </P>
        <P>
          Autonome et passionné par mon environnement technique, je prête une
          haute attention à ma formation au quotidien et j'aime échanger et
          partager sur ces sujets.
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
              46 rue Granoux
              <br />
              13004 Marseille
            </P>
          </div>
        </address>
      </MainArticle>
    </aside>
  );
};
