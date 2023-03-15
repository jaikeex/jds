import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as SyntaxHighlighterThemes from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { SyntaxHighlighterLanguages } from './syntax-highlighter-languages';
import type { CodeClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface CodeProps {
  children?: string | string[];
  classes?: Classes<CodeClassKey>;
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

const Code: React.FC<CodeProps> = ({ children = '', className = '', classes = {}, style = 'darcula', ...props }) => {
  const classNames = mergeClasses(useStyles(), classes);

  return (
    <div className={clsx(classNames.root, className)}>
      <SyntaxHighlighter {...props} style={SyntaxHighlighterThemes[style]}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
