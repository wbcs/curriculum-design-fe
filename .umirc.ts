import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
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
    ['babel-plugin-import', { libraryName: 'antd', style: true }]
  ]
})
