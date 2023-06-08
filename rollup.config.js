import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: [
    {
      format: 'esm',
      file: 'Folder/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};