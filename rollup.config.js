import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';
import { iniparser } from "rollup-plugin-iniparser";

const // 
  prod = !process.env.ROLLUP_WATCH,
  dev = !!process.env.ROLLUP_WATCH,
  plugins = [
    sass({
      insert: true
    }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/' },
        { src: 'src/assets/*', dest: 'dist/' }
      ]
    }),
    iniparser({
      include: "src/*.ini",
    }),
    resolve({
      browser: true,
    }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      babelrc: false,
      presets: [['env', { modules: false }]],
      plugins: [
        ["transform-object-rest-spread"],
        [
          "transform-react-jsx",
          {
            "pragma": "h"
          },
          "external-helpers"
        ]
      ]
    }),
    prod && uglify(),
    dev && livereload('dist'),
    dev &&
    serve({
      contentBase: ['dist'],
      historyApiFallback: true,
      port: 8090,
    }),
  ];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.min.js',
      sourcemap: dev ? 'inline' : false,
      format: 'iife',
    },
    plugins: plugins
  }
];
