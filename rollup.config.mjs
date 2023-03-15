import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import packageJson from './package.json' assert { type: 'json' };

const EXTERNAL = [...Object.keys(packageJson.peerDependencies)];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/esm',
        format: 'esm'
      }
    ],
    plugins: [resolve(), json(), typescript({ tsconfig: './tsconfig.build.json' }), commonjs()],
    external: [...EXTERNAL]
  }
];
