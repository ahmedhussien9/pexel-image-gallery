import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { NextSeo } from 'next-seo'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout = ({ children, title = 'This is the default title', description = "This the default description" }: Props) => (
  <div>
    <NextSeo
      title={title}
      description={description}
    />
    <header >
      <Navbar ></Navbar>
    </header>
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
