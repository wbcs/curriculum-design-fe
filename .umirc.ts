import { defineConfig } from 'umi'

const proxy = {
  '/api/*': {
    target: 'http://localhost:3000',
    changeOrigin: true
  }
}

export default defineConfig({
  routes: [
    { path: '/login', component: '@/pages/login' },
    { path: '/sign-up', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/user', component: '@/pages/user' }
      ]
    }
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ],
    [
      'styled-jsx/babel',
      {
        optimizeForSpeed: true
      }
    ]
  ],
  proxy
})
