import parsePhoneNumber from "libphonenumber-js";

import { H2, H3, MainArticle, P } from "../Components";
import { MD } from "../CustomMarkdown";
import resume from "../../resume.json";

export default () => {
  return (
    <aside className="col-span-1 flex flex-col items-start justify-center  gap-4 bg-zinc-50 p-8 text-zinc-800">
      <MainArticle>
        <H2>À propos</H2>
        <MD>{resume.basics.summary}</MD>
      </MainArticle>
      <MainArticle>
        <H2 className="text-lg font-bold uppercase">Coordonnées</H2>
        <address className="flex flex-col gap-1 not-italic">
          <div>
            <H3>Téléphone</H3>
            <a
              className="leading-tight tracking-tight"
              href={"tel:" + resume.basics.phone}
            >
              {parsePhoneNumber(resume.basics.phone)?.formatNational() ??
                resume.basics.phone}
            </a>
          </div>
          <div>
            <H3>Email</H3>
            <a className="leading-tight" href={"mailto:" + resume.basics.email}>
              {resume.basics.email}
            </a>
          </div>
          <div>
            {resume.basics.profiles.map((profile) => {
              const url = new URL(profile.url);
              const simplified = `${url.hostname.replace("www.", "")}${
                url.pathname
              }`;
              return (
                <>
                  <H3>LinkedIn</H3>
                  <a className="leading-tight" href={profile.url}>
                    {simplified}
                  </a>
                </>
              );
            })}
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
              {resume.basics.location.address}
              <br />
              {resume.basics.location.postalCode} {resume.basics.location.city}
            </P>
          </div>
        </address>
      </MainArticle>
    </aside>
  );
};
