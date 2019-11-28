import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pokeapi-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  hashFileNames: true,
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/styles.scss'
      ]
    })
  ]
};
