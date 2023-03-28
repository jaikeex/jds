import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as SyntaxHighlighterThemes from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { SyntaxHighlighterLanguages } from './syntax-highlighter-languages';
import * as Styled from './styles';

export interface CodeProps {
  children?: string | string[];
  className?: string;
  codeTagProps?: React.HTMLProps<HTMLElement>;
  customStyle?: React.CSSProperties;
  language: SyntaxHighlighterLanguages;
  lineNumberContainerStyle?: React.CSSProperties;
  lineNumberStyle?: React.CSSProperties | lineNumberStyleFunction;
  lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  style?: keyof typeof SyntaxHighlighterThemes;
  wrapLines?: boolean;
  wrapLongLines?: boolean;
}

const Code: React.FC<CodeProps> = ({ children = '', className = '', style = 'darcula', ...props }) => (
  <Styled.CodeRoot className={className}>
    <SyntaxHighlighter {...props} style={SyntaxHighlighterThemes[style]}>
      {children}
    </SyntaxHighlighter>
  </Styled.CodeRoot>
);

export default Code;
