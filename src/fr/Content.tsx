import {
  H1,
  H2,
  H3,
  H4,
  MainArticle,
  P,
  Section,
  SubArticle,
  UL,
} from "../Components";

export default () => {
  return (
    <main className="col-span-2 flex flex-col justify-center gap-5 bg-white px-8 py-6">
      <H1 className="text-zinc-700">
        <span className="text-3xl">Lucas Leroux</span>
        <span className="text-lg">Développeur front-end</span>
      </H1>

      <hr />

      <Section>
        <H2 className="text-zinc-700">Postes occupés</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Développeur web front-end</H3>
          <H4 className="text-zinc-700">
            <span>Subclic</span>
            <span>Mai 2022 - Auj.</span>
          </H4>
          <UL className="text-zinc-500">
            <li>
              Développement au sein de l'équipe front-end d'outils
              d'administration à usage interne et pour la clientèle sur la base
              d'un design system spécifique:
              <UL>
                <li>
                  Outil d'édition de formulaire avec TypeScript, Next.js,
                  zustand et MUI
                </li>
                <li>
                  Outil de rendu de formulaire suivant la norme JSONForms avec
                  TypeScript, Remix, React Aria Components et vanilla-extract
                </li>
              </UL>
            </li>
            <li>
              Développement d'une API de génération de document PDF depuis du
              code HTML et d'extraction de données depuis un document PDF avec
              TypeScript, Express et Puppeteer
            </li>
            <li>
              Ajout continu de tests unitaires et d'intégration (Jest, Vitest,
              React Testing Library) et end-to-end (Playwright)
            </li>
          </UL>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Développeur web front-end</H3>
          <H4 className="text-zinc-700">
            <span>Delko</span>
            <span>Déc. 2020 - Mai 2022</span>
          </H4>
          <UL className="text-zinc-500">
            <li>
              Développement front d'un CRM interne (gestion administrative,
              catalogue produits, etc.) pour le personnel et les franchisés de
              la chaîne avec React, Redux et Material-UI
            </li>
            <li>
              Rédaction de tests unitaires et d'intégration Jest et Enzyme
            </li>
          </UL>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Développeur web freelance</H3>
          <H4 className="text-zinc-700">Oct. 2019 - Nov. 2020</H4>
          <P className="text-zinc-500">
            Développement de solutions web React / Gatsby / Eleventy
          </P>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Développeur web front-end</H3>
          <H4 className="text-zinc-700">
            <span>WeCashUp</span>
            <span>Juin 2016 - Juin 2018</span>
          </H4>
          <P className="text-zinc-500">
            Conception, développement et suivi d'applications web pour le
            service de paiement universel WeCashUp : formulaire de paiement,
            interfaces back-office réalisés à l'aide de jQuery, ES6 et React
          </P>
        </MainArticle>
      </Section>

      <Section>
        <H2 className="text-zinc-700">Compétences professionnelles</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Langages</H3>
          <P className="text-zinc-500">TypeScript / JavaScript, HTML / CSS</P>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Frameworks / Librairies / Systèmes</H3>
          <UL className="text-zinc-500">
            <li>
              React, Redux, Zustand, React Router, Remix, Next.js, GraphQL /
              Apollo Client, Jest / Vitest, Testing Library, Playwright,
              TailwindCSS, vanilla-extract, SASS et méthodologie BEM
            </li>
            <li>Linux, MacOS, Bash, Git</li>
          </UL>
        </MainArticle>
      </Section>

      <Section>
        <H2 className="text-zinc-700">Formation</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Université de Poitiers</H3>
          <H4 className="text-zinc-700">Master Web Éditorial 2013 - 2015</H4>
          <P className="text-zinc-500">
            Gestion de projet, stratégie de contenus, SEO, UX design, culture
            numérique, programmation web
          </P>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Université de Lorraine</H3>

          <SubArticle>
            <H4 className="text-zinc-700">
              <span>
                LP ATC Technologies de l’Information et de la Communication
              </span>
              <span>2012 - 2013</span>
            </H4>
            <P className="text-zinc-500">
              Techniques de rédaction web, référencement SEO/SMO, ergonomie web
            </P>
          </SubArticle>

          <SubArticle>
            <H4 className="text-zinc-700">
              <span>DUT Services et Réseaux de Communication</span>
              <span>2010 - 2012</span>
            </H4>
            <P className="text-zinc-500">
              Infographie, programmation web, communication, audiovisuel
            </P>
          </SubArticle>
        </MainArticle>
      </Section>
    </main>
  );
};
