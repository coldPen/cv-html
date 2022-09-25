import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const Section: React.FC<Props> = ({ children, className }) => (
  <section className={`flex flex-col gap-2 ${className ?? ""}`}>
    {children}
  </section>
);
export const MainArticle: React.FC<Props> = ({ children, className }) => (
  <article className={`flex flex-col gap-2 ${className ?? ""}`}>
    {children}
  </article>
);
export const SubArticle: React.FC<Props> = ({ children, className }) => (
  <article className={`flex flex-col gap-1 ${className ?? ""}`}>
    {children}
  </article>
);
export const H1: React.FC<Props> = ({ children, className }) => (
  <h1 className={`flex flex-col font-black uppercase ${className ?? ""}`}>
    {children}
  </h1>
);
export const H2: React.FC<Props> = ({ children, className }) => (
  <h2 className={`text-xl font-extrabold uppercase ${className ?? ""}`}>
    {children}
  </h2>
);
export const H3: React.FC<Props> = ({ children, className }) => (
  <h3 className={`font-extrabold ${className ?? ""}`}>{children}</h3>
);
export const H4: React.FC<Props> = ({ children, className }) => (
  <h4 className={`flex flex-col leading-tight ${className ?? ""}`}>
    {children}
  </h4>
);
export const P: React.FC<Props> = ({ children, className }) => (
  <p className={`leading-tight ${className ?? ""}`}>{children}</p>
);
export const UL: React.FC<Props> = ({ children, className }) => (
  <ul className={`list-disc pl-5 leading-tight ${className ?? ""}`}>
    {children}
  </ul>
);
