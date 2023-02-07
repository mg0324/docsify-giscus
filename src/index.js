import { install } from './giscus'

if (!window.$docsify) {
  window.$docsify = {}
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(install)