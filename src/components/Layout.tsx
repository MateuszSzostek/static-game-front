import * as React from "react"
import { PropsWithChildren } from "react"

interface ILayoutProps {}

const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children } = props
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}

export default Layout
