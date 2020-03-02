import * as React from 'react'

interface IProps {
  children: React.ReactChild
}

const Layout: React.FC<IProps> = ({
  children
}) => (
  <div>
    fuck
    {children}
  </div>
)

export default Layout
