import Markdown, { type MarkdownToJSX } from "markdown-to-jsx";
import { H1, H2, H3, H4, P, UL } from "./Components";
import React from "react";

const options: MarkdownToJSX.Options = {
  overrides: {
    h1: { component: H1 },
    h2: { component: H2 },
    h3: { component: H3 },
    h4: { component: H4 },
    p: { component: P },
    ul: { component: UL },
  },
  wrapper: React.Fragment,
  forceBlock: true,
};

export function MD({ children }: { children: string }) {
  return <Markdown options={options}>{children}</Markdown>;
}
