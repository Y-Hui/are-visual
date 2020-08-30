import { defineConfig } from 'dumi'

const ENV = process.env.NODE_ENV
const prefix = '/are-visual/docs-dist/'

export default defineConfig({
  title: 'Are Visual',
  favicon:
    ENV === 'production'
      ? `${prefix}/images/favicon.ico`
      : '/images/favicon.ico',
  logo:
    ENV === 'production'
      ? `${prefix}/images/are-visual.svg`
      : '/images/are-visual.svg',
  outputPath: 'docs-dist',
  base: ENV === 'production' ? prefix : '/',
  publicPath: ENV === 'production' ? prefix : '/',
  dynamicImport: ENV === 'production' ? {} : false,
  exportStatic: ENV === 'production' ? {} : false,
  // more config: https://d.umijs.org/config
})
