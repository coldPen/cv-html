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
    <main className="col-span-2 flex flex-col justify-center gap-5 bg-white p-8">
      <H1 className="text-zinc-700">
        <span className="text-3xl">Lucas Leroux</span>
        <span className="text-lg">Front-end developer</span>
      </H1>

      <hr />

      <Section>
        <H2 className="text-zinc-700">Held positions</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Front-end developer</H3>
          <H4 className="text-zinc-700">
            <span>Subclic</span>
            <span>May 2022 - Today</span>
          </H4>
          <UL className="text-zinc-500">
            <li>
              Development within the front-end team of administration tools for
              internal use and for customers, based on a specific design system:
              <UL>
                <li>
                  Form-editing tool with TypeScript, Next.js, zustand and MUI
                </li>
                <li>
                  JSONForms-based form rendering tool with TypeScript, Remix,
                  React Aria Components and vanilla-extract
                </li>
              </UL>
            </li>
            <li>
              Development of an API for generating PDF documents from HTML code
              and data extraction from PDF documents with TypeScript, Express
              and Puppeteer
            </li>
            <li>
              Continuous addition of unit and integration tests (Jest, Vitest,
              React Testing Library) and end-to-end testing (Playwright)
            </li>
          </UL>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Front-end developer</H3>
          <H4 className="text-zinc-700">
            <span>Delko</span>
            <span>December 2020 - May 2022</span>
          </H4>
          <UL className="text-zinc-500">
            <li>
              Front-end development of an internal CRM (administrative
              management, product catalogue, etc.) for the chain's staff and
              franchisees with React, Redux and Material-UI
            </li>
            <li>Writing unit and integration tests with Jest and Enzyme</li>
          </UL>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Freelance web developer</H3>
          <H4 className="text-zinc-700">October 2019 - November 2020</H4>
          <P className="text-zinc-500">
            React / Gatsby / Eleventy web development
          </P>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">Front-end developer</H3>
          <H4 className="text-zinc-700">
            <span>WeCashUp</span>
            <span>June 2016 - June 2018</span>
          </H4>
          <P className="text-zinc-500">
            Design, development and monitoring of web applications for the
            universal payment service WeCashUp: payment form, back-office
            interfaces using jQuery, ES6 and React
          </P>
        </MainArticle>
      </Section>

      <Section>
        <H2 className="text-zinc-700">Professional skills</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Languages</H3>
          <P className="text-zinc-500">TypeScript / JavaScript, HTML / CSS</P>
        </MainArticle>

        <MainArticle>
          <H3 className="text-zinc-700">
            Frameworks / Libraries / Operating systems
          </H3>
          <UL className="text-zinc-500">
            <li>
              React, Redux, Zustand, Remix, Next.js, GraphQL / Apollo Client,
              Jest / Vitest, Testing Library, Playwright, TailwindCSS,
              vanilla-extract, SASS and BEM methodology
            </li>
            <li>Linux, MacOS, Bash, Git</li>
          </UL>
        </MainArticle>
      </Section>

      <Section>
        <H2 className="text-zinc-700">Training</H2>

        <MainArticle>
          <H3 className="text-zinc-700">Université de Poitiers</H3>
          <H4 className="text-zinc-700">Master Web Éditorial 2013 - 2015</H4>
          <P className="text-zinc-500">
            Project management, content strategy, SEO, UX design, web
            programming
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
              Web writing techniques, SEO/SMO, UX design
            </P>
          </SubArticle>

          <SubArticle>
            <H4 className="text-zinc-700">
              <span>DUT Services et Réseaux de Communication</span>
              <span>2010 - 2012</span>
            </H4>
            <P className="text-zinc-500">
              Graphic design and CAD, web programming, communication,
              audiovisual
            </P>
          </SubArticle>
        </MainArticle>
      </Section>
    </main>
  );
};
