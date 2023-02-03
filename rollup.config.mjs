import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import tsConfigJson from './tsconfig.json' assert { type: 'json' };

const EXTERNAL = [
  ...Object.keys(packageJson.devDependencies),
  ...Object.keys(packageJson.peerDependencies)
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        preserveModules: true,
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        preserveModules: true,
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      del({ targets: 'dist/*' })
    ],
    external: [...EXTERNAL]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          paths: tsConfigJson.compilerOptions.paths
        }
      })
    ],
    external: [...EXTERNAL, /\.scss$/]
  }
];
