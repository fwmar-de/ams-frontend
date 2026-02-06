import { defineConfig } from 'orval';

export default defineConfig({
  ams: {
    output: {
      mode: 'tags-split',
      target: 'src/api/ams.ts',
      schemas: 'src/api/model',
      client: 'react-query',
    },
    input: {
      target: 'http://localhost:3000/api/v1-yaml',
    },
  },
});
