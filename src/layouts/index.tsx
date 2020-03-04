import * as React from 'react'
import Header from '@/components/header'

interface IProps {
  children: React.ReactChild
}

const Layout: React.FC<IProps> = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    <Header />
    {children}
  </div>
)

export default Layout
