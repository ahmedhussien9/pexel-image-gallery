import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" user-scalable="no" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header >
      <Navbar navBar={null}></Navbar>
    </header>
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
