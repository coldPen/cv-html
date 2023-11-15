import { H2, H3, MainArticle, P } from "../Components";

export default () => {
  return (
    <aside className="col-span-1 flex flex-col items-start justify-center  gap-4 bg-zinc-50 p-8 text-zinc-800">
      <MainArticle>
        <H2>About</H2>
        <P>
          I am a front&#8209;end developer with proven experience in developing
          business-oriented applications.
        </P>
        <P>
          I also have a strong interest for integration tasks and projects that
          value the construction of coherent, tested and reusable interface
          elements.
        </P>
        <P>
          Autonomous and passionate about my technical environment, I pay a lot
          of attention to my training on a daily basis and I like to exchange
          and share on these subjects.
        </P>
      </MainArticle>
      <MainArticle>
        <H2 className="text-lg font-bold uppercase">Contact details</H2>
        <address className="flex flex-col gap-1 not-italic">
          <div>
            <H3>Phone</H3>
            <a className="leading-tight tracking-tight" href="tel:+33645716476">
              +336 45 71 64 76
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
