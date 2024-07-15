import React from 'react'
import Header from './head/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function DefaultLayout() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}
