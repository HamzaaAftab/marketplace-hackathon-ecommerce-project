'use client'
import React from 'react'
import Navbar from '@/app/(components)/Navbar'
import FeaturesSection from '@/app/(components)/FeaturesSection'
import Footer from '@/app/(components)/Footer'
import BlogSection from '@/app/(components)/BlogSection'

const page = () => {
  return (
    <div>
      <Navbar/>
      <BlogSection/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}

export default page
