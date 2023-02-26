import React from 'react';
import './Code.styles.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as SyntaxHighlighterThemes from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SyntaxHighlighterLanguages } from './syntax-highlighter-languages';

export interface CodeProps {
  children?: string | string[];
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

const Code: React.FC<CodeProps> = ({
  children = '',
  style = 'darcula',
  ...props
}) => {
  return (
    <div className="jds-code">
      <SyntaxHighlighter {...props} style={SyntaxHighlighterThemes[style]}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
