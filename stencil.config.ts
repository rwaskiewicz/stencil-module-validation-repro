import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-warn',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
  ],
};
