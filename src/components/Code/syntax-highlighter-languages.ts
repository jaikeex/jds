export type SyntaxHighlighterLanguages =
  | 'abap'
  | 'abnf'
  | 'actionscript'
  | 'ada'
  | 'agda'
  | 'al'
  | 'antlr4'
  | 'apacheconf'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'aql'
  | 'arduino'
  | 'arff'
  | 'asciidoc'
  | 'asm6502'
  | 'asmatmel'
  | 'aspnet'
  | 'autohotkey'
  | 'autoit'
  | 'avisynth'
  | 'avro-idl'
  | 'bash'
  | 'basic'
  | 'batch'
  | 'bbcode'
  | 'bicep'
  | 'birb'
  | 'bison'
  | 'bnf'
  | 'brainfuck'
  | 'brightscript'
  | 'bro'
  | 'bsl'
  | 'c'
  | 'cfscript'
  | 'chaiscript'
  | 'cil'
  | 'clike'
  | 'clojure'
  | 'cmake'
  | 'cobol'
  | 'coffeescript'
  | 'concurnas'
  | 'coq'
  | 'cpp'
  | 'crystal'
  | 'csharp'
  | 'cshtml'
  | 'csp'
  | 'css-extras'
  | 'css'
  | 'csv'
  | 'cypher'
  | 'd'
  | 'dart'
  | 'dataweave'
  | 'dax'
  | 'dhall'
  | 'diff'
  | 'django'
  | 'dns-zone-file'
  | 'docker'
  | 'dot'
  | 'ebnf'
  | 'editorconfig'
  | 'eiffel'
  | 'ejs'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang'
  | 'etlua'
  | 'excel-formula'
  | 'factor'
  | 'false'
  | 'firestore-security-rules'
  | 'flow'
  | 'fortran'
  | 'fsharp'
  | 'ftl'
  | 'gap'
  | 'gcode'
  | 'gdscript'
  | 'gedcom'
  | 'gherkin'
  | 'git'
  | 'glsl'
  | 'gml'
  | 'gn'
  | 'go-module'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haxe'
  | 'hcl'
  | 'hlsl'
  | 'hoon'
  | 'hpkp'
  | 'hsts'
  | 'http'
  | 'ichigojam'
  | 'icon'
  | 'icu-message-format'
  | 'idris'
  | 'iecst'
  | 'ignore'
  | 'inform7'
  | 'ini'
  | 'io'
  | 'j'
  | 'java'
  | 'javadoc'
  | 'javadoclike'
  | 'javascript'
  | 'javastacktrace'
  | 'jexl'
  | 'jolie'
  | 'jq'
  | 'js-extras'
  | 'js-templates'
  | 'jsdoc'
  | 'json'
  | 'json5'
  | 'jsonp'
  | 'jsstacktrace'
  | 'jsx'
  | 'julia'
  | 'keepalived'
  | 'keyman'
  | 'kotlin'
  | 'kumir'
  | 'kusto'
  | 'latex'
  | 'latte'
  | 'less'
  | 'lilypond'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'llvm'
  | 'log'
  | 'lolcode'
  | 'lua'
  | 'magma'
  | 'makefile'
  | 'markdown'
  | 'markup-templating'
  | 'markup'
  | 'matlab'
  | 'maxscript'
  | 'mel'
  | 'mermaid'
  | 'mizar'
  | 'mongodb'
  | 'monkey'
  | 'moonscript'
  | 'n1ql'
  | 'n4js'
  | 'nand2tetris-hdl'
  | 'naniscript'
  | 'nasm'
  | 'neon'
  | 'nevod'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'objectivec'
  | 'ocaml'
  | 'opencl'
  | 'openqasm'
  | 'oz'
  | 'parigp'
  | 'parser'
  | 'pascal'
  | 'pascaligo'
  | 'pcaxis'
  | 'peoplecode'
  | 'perl'
  | 'php-extras'
  | 'php'
  | 'phpdoc'
  | 'plsql'
  | 'powerquery'
  | 'powershell'
  | 'processing'
  | 'prolog'
  | 'promql'
  | 'properties'
  | 'protobuf'
  | 'psl'
  | 'pug'
  | 'puppet'
  | 'pure'
  | 'purebasic'
  | 'purescript'
  | 'python'
  | 'q'
  | 'qml'
  | 'qore'
  | 'qsharp'
  | 'r'
  | 'racket'
  | 'reason'
  | 'regex'
  | 'rego'
  | 'renpy'
  | 'rest'
  | 'rip'
  | 'roboconf'
  | 'robotframework'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shell-session'
  | 'smali'
  | 'smalltalk'
  | 'smarty'
  | 'sml'
  | 'solidity'
  | 'solution-file'
  | 'soy'
  | 'sparql'
  | 'splunk-spl'
  | 'sqf'
  | 'sql'
  | 'squirrel'
  | 'stan'
  | 'stylus'
  | 'swift'
  | 'systemd'
  | 't4-cs'
  | 't4-templating'
  | 't4-vb'
  | 'tap'
  | 'tcl'
  | 'textile'
  | 'toml'
  | 'tremor'
  | 'tsx'
  | 'tt2'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'typoscript'
  | 'unrealscript'
  | 'uorazor'
  | 'uri'
  | 'v'
  | 'vala'
  | 'vbnet'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'visual-basic'
  | 'warpscript'
  | 'wasm'
  | 'web-idl'
  | 'wiki'
  | 'wolfram'
  | 'wren'
  | 'xeora'
  | 'xml-doc'
  | 'xojo'
  | 'xquery'
  | 'yaml'
  | 'yang'
  | 'zig';
