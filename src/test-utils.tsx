import React from 'react';
import type { queries, Queries, RenderOptions, RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styling';

const AllTheProviders = (props: React.PropsWithChildren) => <ThemeProvider>{props.children}</ThemeProvider>;

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: React.ReactElement,
  options?: RenderOptions<Q, Container, BaseElement>
): RenderResult<Q, Container, BaseElement> => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
